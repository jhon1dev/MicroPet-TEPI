const {expect} = require('chai');

const {HubScene} = require('../app/hub.js');

describe('HubScene', ()=>{
    it('Deve centralizar o pet na tela', ()=> {
        // Arrange (Preparação)
        const hubScene = new HubScene();

        // Act (Ação)
       hubScene.create();
    
       // Assert (Afirmação)
       expect(hubScene.petSprite.x).to.equal(hubScene.cameras.main.width / 2);
       expect(hubScene.petSprite.y).to.equal(hubScene.cameras.main.height / 2);
    })
    
    it('Deve criar 3 botões na tela', ()=>{
        // Arrange (Preparação)
        const hubScene = new HubScene();

        // Act (Ação)
        hubScene.create();
        
        // Assert (Afirmação)
        expect(hubScene.buttons.length).to.equal(3);
    })
})