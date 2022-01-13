/* Example|Образец

 const aFrames = new DrawAnimation() ;

aFrames.frameCount = 3; 
aFrames.frameSpeed = 2; ///dev

const a = extendContent(GenericSmelter, "a", {});

a.drawer = aFrames;

*/


const toisonFrames = new DrawAnimation() ;

toisonFrames.frameCount = 3;
toisonFrames.frameSpeed = 2;

const toison-purifier = extendContent(GenericSmelter, "toison-purifier", {});

toison-purifier.drawer = toisonFrames;

const processorFrames = new DrawAnimation() ;

processorFrames.frameCount = 3;
processorFrames.frameSpeed = 2;

const processor-creator = extendContent(GenericSmelter, "processor-creator", {});

processor-creator.drawer = processorFrames;

/*
.animated = settingLib.settingAnimatedSprite();
.shootType = muonLaser;
.heatRegions = [];
.animationRegions = [];
.entityType = prov(() => {
	entityB = extend(Turret.TurretEntity, {
		getFrame(){
			return this._frame;
		},
		
		setFrame(a){
			this._frame = a;
		},
		
		getTargetTime(){
			return this._targetTime;
		},
		
		setTargetTime(a){
			this._targetTime = a;
		},
		
		getBool(){
			return this._targetBool;
		},
		
		setBool(a){
			this._targetBool = a;
		}
	});
	entityB.setFrame(0);
	entityB.setTargetTime(60);
	entityB.setBool(false);
	
	return entityB;
});
*/



