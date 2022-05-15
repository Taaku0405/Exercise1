// オプションを指定してSkipperの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide")
  transition : 'slide',
  // 変化にかかる時間（ミリ）
  speed : 700,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形("block" or "bubble")
  navType : 'block',
  // 子要素の種類("div" or "img")
  childrenElementType : 'div',
  // ナビゲーション矢印の表示(trueで表示)
  arrows : true,
  // スライドショーの自動再生(falseで自動再生なし)
  autoPlay : true,
  // 自動再生時のスライド切り替え感覚（ミリ秒）
  autoPlayDuration : 3000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか[false]:矢印を隠さない[true]:矢印を隠す
  hidePrevious : false
});

$(function(){
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
    },800);
    event.preventDefault();
  });
});