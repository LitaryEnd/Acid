/*

 Taken and modified from Heavy-Armaments mod. | Взято и модифицировано из Heavy-Armaments. 

*/ 

/* Example|Образец

const unit = extend(UnitType, "unit", { //Unit 

	draw(unit) { 

		this.super$draw(unit); 

		Draw.rect( 

			"acid-name", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),

			Time.time * -10);/// -10 > -20(speed) 

		Draw.rect( 

			"acid-name-outline", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -10);/// -10 > -20(speed)

	}

});  

*/

const sparrow = extend(UnitType, "sparrow", { //Unit 

	draw(unit) { 

		this.super$draw(unit); 

		Draw.rect( 

			"acid-s2-rotor", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),

			Time.time * -10); 

		Draw.rect( 

			"acid-s2-rotor-outline", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -10); 

	}

}); 

const woodpecker = extend(UnitType, "woodpecker", { 

	draw(unit) { 

		this.super$draw(unit); 

		Draw.rect( 

			"acid-s3-rotor", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -40); 

		Draw.rect( 

			"acid-s3-rotor-outline", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),

			Time.time * -40); 

   Draw.rect(

			"acid-s1-rotor", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -20); 

		Draw.rect( 

			"acid-s1-rotor-outline", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -20); 

	}

}); 

const symmetry = extend(UnitType, "symmetry", { 

	draw(unit) { 

		this.super$draw(unit); 

		Draw.rect( 

			"acid-s4-rotor", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -10); 

		Draw.rect( 

			"acid-s4-rotor-outline", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),

			Time.time * -10); 

   Draw.rect(

			"acid-s3-rotor", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -30); 

		Draw.rect( 

			"acid-s3-rotor-outline", 

			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0), 

			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0), 

			Time.time * -30); 

	}

}); 

/*

unit.constructor = () => extend(UnitEntity, {}); 

*/

sparrow.constructor = () => extend(UnitEntity, {}); 

woodpecker.constructor = () => extend(UnitEntity, {}); 

symmetry.constructor = () => extend(UnitEntity, {});
