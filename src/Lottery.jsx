import {useState} from "react";
import Button from "./Button";

import { genTicket,sum   } from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n=3,winCondition}){
    const [ticket, setTicket] = useState(genTicket(n));
    let isWining = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>     
            <Button action={buyTicket}/>            <h3>{isWining && "Congratulations,you won!"}</h3>
        </div>
    );
}