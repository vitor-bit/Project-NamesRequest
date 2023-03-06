import { useEffect, useState } from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Header } from "../../components/Header";
import { 
    Container,
    Content,
    FilterForm,
    TableContent
} from "./style";
import { UserData } from "../../types";
import { ModalInfo } from "../../components/ModalInfo";

export function Home(){
    const [dataFetching, setDataFetching] = useState<UserData[]>([]);
    const [dataFetchingBackup, setDataFetchingBackup] = useState<UserData[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    
    useEffect(( ) => { 
         axios.get('https://randomuser.me/api/' , {
            params: {
                results:10
            }
         })
         .then(response => {
            setDataFetching(response.data.results);
            setDataFetchingBackup(response.data.results);
            
         })
         .catch(error => {
            setError(error);
         })
         .finally(() => {
            setIsFetching(false);
         })
    }, []);
    /*
    useEffect(() => {
        if(search.length !== 0){
            const filter = dataFetching.filter(a => a.name.first.toUpperCase().indexOf(search.toUpperCase()) >= 0 ||
            a.name.last.toUpperCase().indexOf(search.toUpperCase()) >= 0);
            setDataFetching(filter);
        } else {
            setDataFetching(dataFetchingBackup);
        }
    }, [search])
    */

    const filtroPesquisa = search.length > 0
    ? dataFetching.filter(a => (a.name.first.toUpperCase() || a.name.last.toUpperCase()).includes(search.toUpperCase()))
    : [];

    /*
    useEffect(() => {
        if(searchCountry !== ''){
            const filterCountry = dataFetching.filter(a => a.location.country.toUpperCase() === searchCountry.toUpperCase());
            setDataFetching(filterCountry);
        } else {
            setDataFetching(dataFetchingBackup);
        }
    }, [searchCountry])
    */
    const filtroPais = searchCountry.length > 0
    ? dataFetching.filter(a => a.location.country.toUpperCase().includes(searchCountry.toUpperCase()))
    : [];

    const atividadeAtual = search.length > 0 ? filtroPesquisa : filtroPais;

    return(
        <Container>
            <Header/>
            <Content>
                <h1>Lista de alunos do curso</h1>
                {
                    isFetching ? (
                        <div className="logo-loading">
                            <ReactLoading type="spin" color="#FFF" />
                        </div>
                    ):(
                        <>
                            <FilterForm>
                                <div>
                                    <label htmlFor="nome">Pesquisar</label>
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        placeholder="Nome do aluno" 
                                        onChange={e => setSearch(e.target.value)}
                                        
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nacionalidade">Nacionalidade</label>
                                    <select 
                                        name="nacionalidade" 
                                        id="nacionalidade"
                                        onChange={(e) => setSearchCountry(e.target.value)}
                                        value={searchCountry}
                                    >    
                                        <option value=''>Todas</option>
                                            {
                                                dataFetchingBackup.map((e, index) => {
                                                    return(
                                                        <option key={index} value={e.location.country}>{e.location.country}</option>
                                                    )
                                                }) 
                                            }
                                    </select>
                                </div>
                            </FilterForm>
                            <TableContent>
                    <thead>
                        <tr> 
                            <th>Nome</th>
                            <th>Sexo</th>
                            <th>Nacionalidade</th>
                            <th>Ação</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {
                            searchCountry.length > 0 || search.length > 0 ? (
                                atividadeAtual.map((e, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{`${e.name.first} ${e.name.last}`}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.location.country}</td>
                                            <td>
                                            <button>Visualizar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                dataFetchingBackup.map((e, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{`${e.name.first} ${e.name.last}`}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.location.country}</td>
                                            <td>
                                            <button id="btVisu">Visualizar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                            </TableContent>
                        </>
                    )
                }
                 
            </Content>
            
        </Container>
    )
} 
