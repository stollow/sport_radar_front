import axios from "axios";
import {Component} from "react";
import Match from "../match/Match"
import MatchModel from "../models/MatchModel"

interface props {

}

interface state {
    matchList:MatchModel[]
}


export class MatchList extends Component<props, state> {

    constructor(props : any){
        super(props)
        this.state = ({
            matchList: []
        })
    }

    componentDidMount(){
        let matchesData: MatchModel[] = []
        let matches: MatchModel[] = []
        axios.get("http://localhost:1337/api/matches").then( response => {
            matchesData = response.data
            matchesData.forEach((element: MatchModel) => {
                matches.push(new MatchModel(element._id,element._doc,element.teams.away.name,element.teams.home.name,element.fullDate,element.result.home,
                    element.result.away,element.comment,element.tournamentId, element.timeplay))
            })
            this.setState( function(state,props) {
                return{
                    matchList : matches
                }
            }
            )
        })
    }
    render(){
        return <div>
            <p>hello</p>
            {console.log(this.state)}
            {this.state.matchList !== [] ? this.state.matchList.forEach(element => {
               <p>{element.comment}</p> 
                }) : null
            }
            <Match />
        </div>
    }

}