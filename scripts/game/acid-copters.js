

//module.export

//const effect-lib = effLib ();

const sparrow = extend(UnitType, "sparrow", { //Unit 
	draw(unit) { 
		this.super$draw(unit); 
		Draw.rect( 
			"acid-sparrow-rotor", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -10); 
		Draw.rect( 
			"acid-sparrow-rotor-outline", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 
			Time.time * -10); 
	}
}); 


const woodpecker = extend(UnitType, "woodpecker", { 
	draw(unit) { 
		this.super$draw(unit); 
		Draw.rect( 
			"acid-woodpecker-rotor", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 
			Time.time * -15); 
		Draw.rect( 
			"acid-woodpecker-rotor-outline", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15); 
	}
}); 

const magpie = extend(UnitType, "magpie", { 
	draw(unit) { 
		this.super$draw(unit); 
		Draw.rect( 
			"acid-magpie-rotor", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 
			Time.time * -20); 
		Draw.rect( 
			"acid-magpie-rotor-outline", 
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 
			Time.time * -20); 
	}
}); 

//taken with Heavy-Armaments. 
sparrow.constructor = () => extend(UnitEntity, {}); 
woodpecker.constructor = () => extend(UnitEntity, {}); 
magpie.constructor = () => extend(UnitEntity, {}); 
/*khorn.constructor = () => extend(UnitEntity, {}); 

const khorn = extend (UnitType, "Khorn"), 
{
     draw(unit) {
  this.super$draw(unit);

Draw.rect(

"acid-khorn-nuke", 

unit.x + Angles.trnsx (unit.rotation - 90,0,0),
unit.y + Angles.trnsy (unit.rotation - 90,0,0),

Time.time * -100);
 }}; */
