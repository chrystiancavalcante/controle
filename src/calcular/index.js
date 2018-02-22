const calculoJuros = (p, i, n) => p*Math.pow(1+i, n)
const evolucao = (p, i, n) => Array
                                .from(new Array(n), (n,i) => i + 1)
                                .map(mes => { 
                                              return {
                                                mes, 
                                                juros: calculoJuros(p, i, mes)
                                              }
                                            })

app.get('/calculadora', (req, res) => {
  const resultado = {
    calculado: false
  }
  if(req.query.valorInicial && req.query.taxa && req.query.tempo){
    resultado.calculado = true
    resultado.total = calculoJuros(
      parseFloat(req.query.valorInicial),
      parseFloat(req.query.taxa)/100, 
      parseInt(req.query.tempo)
    )
    resultado.evolucao = evolucao(
      parseFloat(req.query.valorInicial),
      parseFloat(req.query.taxa)/100, 
      parseInt(req.query.tempo)
    )
  }
  res.render('calculadora', { resultado })
})

const find = (db, collectionName, conditions) => {
  const collection = db.collection(collectionName)
  const cursor = collection.find(conditions)
  const documents = []

  return new Promise((resolve, reject) => {
    cursor.forEach(
      (doc) => documents.push(doc),
      () => resolve(documents)
    )
  })
}

const insert = (db, collectionName, document) => {
  const collection = db.collection(collectionName)
  return new Promise((resolve, reject) =>{
    collection.insert(document, (err, doc) => {
      if(err){
        reject(err)
      }else{
        resolve(doc)
      }
    })
  })
}

const ObjectID = require('mongodb').ObjectID
const remove = (db, collectionName, id) =>{
    const operacoes = db.collection(collectionName)
    new Promise((resolve, reject) =>{
      operacoes.deleteOne({ _id: new ObjectID(id) }, (err, result) =>{
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}
const update = (db, collectionName, id, values) => {
    const collection = db.collection(collectionName)
    return new Promise((resolve, reject) => {
      collection.updateOne(
        { _id: new ObjectID(id) }, // condicao
        { $set: values }, // quais valores novos
        (err, result) =>{
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
    })
}

const subtotal = operacoes => {
  let sub = 0
  return operacoes.map( operacao => {
    sub += operacao.valor
    let newOperacao = {
      _id: operacao._id,
      valor: operacao.valor,
      descricao: operacao.descricao,
      sub: sub
    }
    return newOperacao
  })
}