(function($) {

  	$.fn.crazytext = function(options) {


  		var defaults = {
  			'eixo': 'x',
  			'duracao': 1,
  			'corHover': ''
  		};


  		var settings = $.extend({}, defaults, options);


  		return this.each(function() {


  			$(this).html(function (i, html) {
			    var caracteres = $.trim(html).split("");
			    return '<span>' + caracteres.join('</span><span>') + '</span>';
			});

			$.expr[':'].blank = function(obj){
			  	return obj.innerHTML.trim().length === 0;
			};

			$(this).children('span:blank').html('&nbsp;');

			$(this).css({
				'perspective': '1000px'
			});

			var spans = $(this).children('span');
			var tamanho = $(this).children('span').length;

			$(this).hover(function() {

				var items = Array(360,720,1080,1440,1800,2160,2520,2880,3240);

				$(this).children('span').each(function(index, el) {
					var item = items[Math.floor(Math.random()*items.length)];
					$(el).css({
						'display': 'inline-block',
						'-webkit-transform': 'rotate'+options.eixo+'('+item+'deg)',
						'-ms-transform': 'rotate'+options.eixo+'('+item+'deg)',
						'-o-transform': 'rotate'+options.eixo+'('+item+'deg)',
						'transform': 'rotate'+options.eixo+'('+item+'deg)',
						'-webkit-transition-timing-function': 'linear',
						'-o-transition-timing-function': 'linear',
						'transition-timing-function': 'linear', 
						'-webkit-transition-property': 'all',
						'-o-transition-property': 'all',
						'transition-property': 'all',
						'-webkit-transition-duration': +options.duracao+'s',
						'-o-transition-duration': +options.duracao+'s',
						'transition-duration': +options.duracao+'s',
						'color': options.corHover
					});
					var delay = Array(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1);
					for (var x=0; x <= tamanho; x++) {
						var de = delay[Math.floor(Math.random()*delay.length)];
						$(spans).eq(x).css({
							'transition-delay': de+'s'
						});
					}
				});
				
			}, function() {
				$(this).children('span').css({
					'color': ''
				});
			});


  		});


  	};

})(jQuery);