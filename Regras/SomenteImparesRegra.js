function SomenteImparesRegra(numeros)
{
	this.nome = 'Somente Impares';
};

SomenteImparesRegra.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		var qtd = 0;
		for(var j = 0; j < numeros[i].length; j++)
		{
			if(numeros[i][j] % 2 != 0)
			{
				qtd++;
			}
		}

		if(qtd <= 12)
		{
			novosNumeros.push(numeros[i]);
		}
	}
	return novosNumeros;
};

module.exports = SomenteImparesRegra;