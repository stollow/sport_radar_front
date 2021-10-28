export default class MatchModel {
    _id!: number;
    _doc!:string;
    fullDate:Date;
    tournamentId:number;
    timeplay:number
    time!:{
        time:string
        date:string
        tz:string
        uts:number
    }
    teams!:{
        home:{
            name:string
        },
        away:{
            name:string
        }
    }
    result!:{
        home:number
        away:number
    }
    comment!:string
    constructor(_id:number,_doc:string,away:string, home:string,fullDate:Date,scoreHome:number,
        scoreAway:number,comment:string,tournamentId:number, timeplay:number){
        this._id = _id;
        this._doc = _doc;
        this.teams = {
            away:{
                name:away
            },
            home:{
                name:home
            }
        }
        this.result = {
            away: scoreAway,
            home:scoreHome
        }
        this.timeplay = timeplay
        this.fullDate = fullDate;
        this.comment = comment;
        this.tournamentId = tournamentId
    }
}
