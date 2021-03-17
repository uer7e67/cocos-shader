
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.dynamicAtlasManager.enabled = false;
        this.shader = cc.find("Canvas/shader"); 
        this.map = cc.find("Canvas/map"); 
        this.player = cc.find("Canvas/map/player"); 
        this.renderComp = this.shader.getComponent(cc.RenderComponent); 
        this.material = this.renderComp.getMaterial(0);
    
        this.initShader();
        this.setShaderPosition();
    },

    initShader() {
        this.shader.width = this.map.width; 
        this.shader.height = this.map.height;
        this.material.setProperty("whRatio", this.map.height / this.map.width);
        this.material.setProperty("radius", 0.2);
    },

    setShaderPosition() {
        var wpos = this.player.convertToWorldSpaceAR(cc.v2(0, 0)); 
        var nPos = this.shader.convertToNodeSpaceAR(wpos);
        var center = cc.v2(
            nPos.x / this.shader.width, 
            1 - nPos.y / this.shader.height
        );
        this.material.setProperty("point", center);
    },

    start () {

    },

    // update (dt) {},
});
