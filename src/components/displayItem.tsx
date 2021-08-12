import React ,{Component} from 'react';
import '../style/display.css';
import AfficheHome from './afficheHome';

class DisplayItemHome extends Component{
    props:any;
    state:any;
    photo:any;
    dataOne:any;
    constructor(props:any){
        super(props);
        this.state={
            data:[
                {
                    photo:require('../img/plant.png').default,
                    titre:'Zava-maniry',
                    text:'Ny zava-maniry afahana manatombo ny hery fiarovana.'
                },
                {
                    photo:require('../img/virus.png').default,
                    titre:'Aretina sy fanafody',
                    text:'Ny tsara ho fantatra momba ireo aretina sy fanafody samihafa.'
                },
                {
                    photo:require('../img/sida.png').default,
                    titre:'Homamiadana',
                    text:'Ny Homamiadana: Ny fomba hisorohana azy.'
                },
                {
                    photo:require('../img/bevoka.png').default,
                    titre:'Fitondrana vohoka',
                    text:'Ny tsara ho fantatra mandritra ny fitondrana vohoka.'
                },
                {
                    photo:require('../img/vatana.png').default,
                    titre:'Vatana',
                    text:'Toro-hevitra isan-karazany afahana mikarakara vatana.'
                },
                {
                    photo:require('../img/about.png').default,
                    titre:'Mombamomba',
                    text:'Nom:RANDRIANARIVELO\nPrenom:Herinantenaina Joël\nFilière:IMTICIA5'
                }
            ],
            toggle:{display:'none'},
            contenuAffiche:[{
                            titre:'zava-maniry',
                            donnee:[
                                {
                                    photo:require('../img/persil.jpg').default,
                                    titre:'Persily',
                                    description:`Fanadiovana ny voa (reins): \n Fanadiovana ny voa (reins) izay efa reraka nanadio ireo loto sy poizina rehetra tao amin'ny vatan'ny olombelona ka mila diovina sy sitranina mba ahazo hery vaovao indray hahafahany manohy manatanteraka io andraikiny ao amin'ny tenan'ny olona io.
                                    \nManatsara ny fiasan'ny aty:\nTena manatsara ny fiasan'ny taova ao anaty koa izy satria manampy amin'ny famoahana ny loto rehetra hanaraka ny fivalanan-drano (diurétique).`
                                },
                                {
                                    photo:require('../img/piment.png').default,
                                    titre:'Sakay',
                                    description:`Misy singa ilain'ny vatana maro ao anatin'ny sakay. Santionany amin'ireny ny: Vitamine A,E,C.
                                    \nIreo vokatsoa entiny:\n-Vitamine A : manamora ny fiasan'ireo "métabolisme", manamora ny fiasan'ny "acides aminés sy ny protéines".
                                    \n-Vitamine E : miaro amin'ny fanapoizinana isankarazany ny taovantsika ka maha antitra faingana azy ireo.
                                    \n-Vitamine C : ilaina isak'izay reraka, mba hanatanjahana ny hery fiarovan'ny vatana. Manakarena acide ascorbique ny sakay, izay ilain'ny lalan-drà koa.
                                    \n-Vitamine K : manafaingana ny fikatonan'ny ratra.
                                    \n-Ny fisian'ny vitamine PP ao anatin'ny sakay no mahatonga azy tsy mba lo na dia an-taonany maro aza no efa maina...`
                                }
                                ]
                            },
                            {
                                titre:'Aretina sy fanafody',
                                donnee:[
                                    {
                                        photo:require('../img/moka.jpeg').default,
                                        titre:'Tazomoka',
                                        description:`Ny mahatonga ny tazomoka:\nAretina avy amin'ny katsentsitra ny tazomoka. Ireto ny sasany amin'ny soritr'aretina
                                        :Manavy, mangovitra,tsemboka, marary andoha, manakotsako ny vatana, misalebolebo, na mandoa. Mety hiverina isaky ny roa na telo andro izany, arakaraka ny karazana katsentsitra tafiditra ao amin'ilay olona
                                         sy ny hoe hafiriana izy no efa voan'ilay aretina.`
                                    }
                                ]
                            },
                            {
                                titre:'Homamiadana',
                                donnee:[
                                    {
                                        photo:require('../img/carotte.jpeg').default,
                                        titre:'Ranona karaoty misoroka homamiadana',
                                        description:`Masahina amin'ny rano, kikisana amin'ny rapy, ahandroina amin'ny entona...
                                        \nMarobe ny fomba azo hakana ireo singa mpitondra soa ao anaty karaoty. Ilay ranony manta tsara iny, no tena mitondra voka-tsoa betsaka...`
                                    }
                                ]
                            },
                            {
                                titre:'Fitondrana vohoka',
                                donnee:[
                                    {
                                        photo:require('../img/bevoka.png').default,
                                        titre:'Ny tokony atao rehefa mitondra vohoka',
                                        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate veniam molestias debitis iure illo, ipsa facilis. Earum deserunt veniam rem? Magni doloremque sint dolorem fuga fugit, illo eos pariatur?`
                                    }
                                ]
                            },
                            {
                                titre:'Vatana',
                                donnee:[
                                    {
                                        photo:require('../img/vatana.png').default,
                                        titre:'Ny fomba fitaizana vatana',
                                        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate veniam molestias debitis iure illo, ipsa facilis. Earum deserunt veniam rem? Magni doloremque sint dolorem fuga fugit, illo eos pariatur?`
                                    }
                                ]
                            },
                            {
                                titre:'Mombamomba',
                                donnee:[
                                    {
                                        photo:require('../img/about.png').default,
                                        titre:'Mombamomba ana mpamorina',
                                        description:`Nom : RANDRIANARIVELO
                                        \nPenom : Herinantenaina Joël
                                        \nFilière : IMTICIA 5`
                                    }
                                ]
                            }

                        ]
        };
        this.dataOne=this.state.contenuAffiche[0].donnee;
    }
    render(){
        return (
            <div>
                <div className="row">
                    {this.affiche()}
                </div>
                <AfficheHome toggle={this.state.toggle} turn={this.toggle.bind(this)} data={this.dataOne}/>
            </div>
        )
    }

    affiche(){
        return this.state.data.map((e:any)=>{
            return(
                <div className="column">
                        <div className="card">
                        <img src={e.photo} alt="sary" style={{height:'100px'}}/>
                        <div className="container">
                            <h2>{e.titre}</h2>
                            <p>{e.text}</p>
                            <p><button className="button" onClick={()=>{
                                if (e.titre==='Zava-maniry'){
                                    this.dataOne=this.state.contenuAffiche[0].donnee;
                                }else if (e.titre==='Aretina sy fanafody'){
                                    this.dataOne=this.state.contenuAffiche[1].donnee;
                                }else if (e.titre==='Homamiadana'){
                                    this.dataOne=this.state.contenuAffiche[2].donnee;
                                }else if (e.titre==='Fitondrana vohoka'){
                                    this.dataOne=this.state.contenuAffiche[3].donnee;
                                }else if (e.titre==='Vatana'){
                                    this.dataOne=this.state.contenuAffiche[4].donnee;
                                }else if (e.titre==='Mombamomba'){
                                    this.dataOne=this.state.contenuAffiche[5].donnee;
                                }
                                this.toggle('block');
                            }}>Jerena</button></p>
                        </div>
                        </div>
                    </div>
            )
        });
    }
    toggle(s:string){
        this.setState({toggle:{display:s}});
    }
}

export default DisplayItemHome;