// create variables
const nbaPlayers = (name, number, height, weight, college, ppg, ast, rpg, pie) => {
    return {
        _name: name,
        _number: number,
        _height: height,
        _weight: weight,
        _college: college,
        _ppg: ppg,
        _ast: ast,
        _rpg: rpg,
        _pie: pie,

        get name() {
            return this._name;
        },

        set name(newName) {
            if (newName) {
                return this._name = newName;
            }
        },

        get number() {
            return this._number;
        },

        set number(newNumber) {
            if (newNumber) {
                return this._number = newNumber;
            }
        },

        get height() {
            return this._height;
        },

        set height(newHeight) {
            if (newHeight) {
                return this._height = newHeight;
            }
        },

        get weight() {
            return this._weight;
        },

        set weight(newWeight) {
            if (newWeight) {
                return this._weight = newWeight;
            }
        },

        get college() {
            return this._college;
        },

        set college(newCollege) {
            if (newCollege) {
                return this._college = newCollege
            }
        },

        get ppg() {
            return this._ppg;
        },

        set ppg(newPpg) {
            if (newPpg) {
                return this._ppg = newPpg
            }
        },

        get ast() {
            return this._ast;
        },

        set ast(newAst) {
            if (newAst) {
                return this._ast = newAst
            }
        },

        get rpg() {
            return this._rpg;
        },

        set rpg(newRpg) {
            if (newRpg) {
                return this._rpg = newRpg
            }
        },

        get pie() {
            return this._pie;
        },

        set pie(newPie) {
            if (newPie) {
                return this._pie = newPie
            }
        },

        getStats() {
            if (this._ppg && this._ast && this._rpg) {
                return `${this._name} is averaging ${this._ppg} ppg, ${this._rpg} rpg, and ${this._ast} apg, in the 2022-2023 season.`
            }
        },

        getFunFact() {
            if (this._name === 'Lebron James') {
                return `${this._name} is left handed but shots with his right.`
            }
        },

        allStar() {
            if (this._ppg >= 25.5) {
                return `${this.name} is an NBA all-star player.`
            }
            else {
                return `${this.name} is having a great year averaging ${this.ppg} but unfortunatly is not an All-Star.`
            }
        },



    }
}

// create players
// Lebron James
const lebronJames = nbaPlayers();
lebronJames.name = 'Lebron James';
lebronJames.number = 6;
lebronJames.height = '6ft 9inches';
lebronJames.weight = 260;
lebronJames.college = "St.Mary's St.Vincent Hs";
lebronJames.ppg = 29.8;
lebronJames.ast = 7.8;
lebronJames.rpg = 8.8;
lebronJames.pie = 19.4;
lebronJames.team = 'Lakers';
lebronJames.nickName = 'King James';
// Kevin Durant
const kevinDurant = nbaPlayers();
kevinDurant.name = 'Kevin Durant';
kevinDurant.number = 7;
kevinDurant.height = '7Ft';
kevinDurant.weight = 220;
kevinDurant.college = "Texas LongHorns";
kevinDurant.ppg = 29.7;
kevinDurant.ast = 5.3;
kevinDurant.rpg = 6.7;
kevinDurant.pie = 18.6;
kevinDurant.team = 'Nets';
kevinDurant.nickName = 'Slim Reaper'
// Luka Doncic
const lukaDoncic = nbaPlayers();
lukaDoncic.name = 'Luka Doncic';
lukaDoncic.number = 77;
lukaDoncic.height = '6ft 7 inches';
lukaDoncic.weight = 230;
lukaDoncic.college = "Slovenia";
lukaDoncic.ppg = 33.7;
lukaDoncic.ast = 8.8;
lukaDoncic.rpg = 8.8;
lukaDoncic.pie = 20.8;
lukaDoncic.team = 'Mavs';
lukaDoncic.nickName = 'Luka Magic'
// Jayson Tatum
const jaysonTatum = nbaPlayers();
jaysonTatum.name = 'Jayson Tatum';
jaysonTatum.number = 0;
jaysonTatum.height = '6ft 8 inches';
jaysonTatum.weight = 220;
jaysonTatum.college = "Duke";
jaysonTatum.ppg = 31.1;
jaysonTatum.ast = 8.3;
jaysonTatum.rpg = 4.3;
jaysonTatum.pie = 16.7;
jaysonTatum.team = 'Celtics';
jaysonTatum.nickName = 'Luka Magic';
// Joel Embiid
const joelEmbiid = nbaPlayers();
joelEmbiid.name = 'Joel Embiid';
joelEmbiid.number = 21;
joelEmbiid.height = '7ft';
joelEmbiid.weight = 320;
joelEmbiid.college = "Cameroon";
joelEmbiid.ppg = 33.6;
joelEmbiid.ast = 9.8;
joelEmbiid.rpg = 4.2;
joelEmbiid.pie = 21.1;
joelEmbiid.team = '76ers';
joelEmbiid.nickName = 'The Process';

// varibles for webcontent


console.log(joelEmbiid.allStar())
