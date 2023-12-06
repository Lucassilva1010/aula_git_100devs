const calculaidade = (req, res) => {
    const hoje = new Date(Date.now())
    const nascimento = new Date('1989-09-27')
    res.json({
        "nome": "Lucas",
        "cidade": "Simões",
        "profissao": "programador",
        "nascimento": nascimento.getFullYear()
    })
}
module.exports = {
    calculaidade
}