import axiosRequest  from '../api/index';
import { Player } from '../Interface/IPlayer';
import { Team } from '../Interface/ITeam';

const getPlayer = async (id:number): Promise<Player> => {
    return await axiosRequest.get(`players/${id}`)
        .then((res:any) => res.data );
}

const getTeam = async (id:number) => {
    return await axiosRequest.get(`teams/${id}`)
        .then((res:any) => res?.data);
}

const getLeague = async (id:number) => {
    return await axiosRequest.get(`competitions/${id}`)
        .then((res:any) => res.data );
}

const getAllTeamsInLeague = async (id:number) => {
    return await axiosRequest.get(`competitions/${id}/teams`)
        .then((res:any) => res.data );
}

const getTeamsIds = async () => {
    const league = await getAllTeamsInLeague(2021);
    return league.teams.map((team:Team) => team.id);
}

const getAllPlayersInLeague = async () => {
    const allPlayers = [];
    const allTeamIds = await getTeamsIds();
    for (let index = 0; index < allTeamIds?.length; index++) {
        const currentTeam:Team = await getTeam(allTeamIds[index]);
        allPlayers.push(currentTeam.squad );
    }
    
    return allPlayers;
}

const getRandomTeam = async () => {
    const teamIds = await getTeamsIds();
    const randomTeamId = teamIds[Math.floor(Math.random() * teamIds.length)];
    return await getTeam(randomTeamId); 
}

const getRandomPlayer = async () => {
    const randomTeam = await getRandomTeam();
    const squad = randomTeam.squad;
    const randomPlayer = squad[Math.floor(Math.random() * squad.length)];

    return { randomTeam, randomPlayer};
}

export {
    getPlayer,
    getLeague, 
    getTeam, 
    getAllTeamsInLeague, 
    getTeamsIds, 
    getRandomTeam,
    getRandomPlayer,
    getAllPlayersInLeague
}