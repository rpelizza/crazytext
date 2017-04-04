# Crazy Text

**Arquivos necessários**

Insira em sua página o jQuery 1.12.4 e crazytext.min.js .




**Opções**

`eixo` - X, Y e Z

`duracao` - Tempo em segundos

`corHover` - Cor, em heaxadecimal, para o hover.

`evento` - Trigger (mouseenter, mouseleave, click...)




**Como utilizar**

Chame o elemento pelo ID ou classe, e utilize as opções acima.

As opções padrão são:

1. eixo X
2. duracao 1
3. corHover ''



**Exemplo de utilização**

```js
$('#elemento').crazytext({
	'eixo': 'z',
	'duracao': 1.5,
	'corHover': '#c40c42',
	'evento': 'mouseenter'
});
```

