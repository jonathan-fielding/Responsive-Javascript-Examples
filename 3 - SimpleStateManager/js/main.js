(function(window){
    ssm.addStates([{
        id: 'mobile', maxWidth: 767, onEnter: function(){
            console.log('enter mobile');
        }
    },
    {
        id: 'desktop',  minWidth: 768,  onEnter: function(){
            console.log('enter desktop');
        }
    }]);
    ssm.ready();
}(window));