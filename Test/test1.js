const {test}=QUnit;
const lojatek=new LOJatek(0);
QUnit.module('ellenorzes()', function(hook) {
    
    test(' letezik e?', function(assert) {
        assert.ok(lojatek.ellenorzes,"ltezik");
      });
      test('függvény e?', function(assert) {
        assert.ok(typeof lojatek.ellenorzes==="function","Függvény");
    });
    test('mind fel van kapcsolva', function(assert) {
        let lojatek=new LOJatek(9);
        assert.equal(lojatek.ellenorzes(), 9);
      });
      test('mind le van kapcsolva', function(assert) {
        let lojatek=new LOJatek(0);
        assert.equal(lojatek.ellenorzes(), 0);
      });
      test('nehany elem fel van kapcsolva', function(assert) {
        let lojatek=new LOJatek(5);
        assert.equal(lojatek.ellenorzes(), 5);
      });
});

QUnit.module('szamszedokValasztasa()', function(h) {
    test(' letezik e?', function(assert) {
        assert.ok(lojatek.szomszedokValtoztatasa,"ltezik");
      });
      test('függvény e?', function(assert) {
        assert.ok(typeof lojatek.szomszedokValtoztatasa==="function","Függvény");
    });
    test('mind fel van kapcsolva', function(assert) {
        let tomb=[
            {ertek: "orange"},
            {ertek: "green"},
            {ertek: "orange"},
            {ertek: "green"},
            {ertek: "orange"},
            {ertek: "green"},
            {ertek: "orange"},
            {ertek: "green"},
            {ertek: "orange"}
            
        ]
        const lojatek=new LOJatek(tom);
        lojatek.szomszedokValtoztatasa(4)
        const lampa=new Lampa();
        assert.equal(lampa.allapot, ["orange","green","orange","green","orange","green","orange","green","orange"] );
      });
}); 