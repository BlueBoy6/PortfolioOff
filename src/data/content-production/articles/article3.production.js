export const Article3 = {
    id : 3,
    title : "Kiss My Beer",
    coverImg : "/img/production/kissmybeer/main-img.jpg",
    date : "En cours de développement",
    category : "Développement",
    tags : ["React", "Beer-App", "OpenStreetMap", "SCSS", "Web-App"],
    technos: ["Javascript", "CSS", "HTML"],
    librairies : ["React", "Axios", "GSAP","React-Router 4","React-Redux", "Dropzone", "ScrollBooster", "Semantic-Ui","Leaflet","Bootstrap", "fontawesome", "Create-React-App"],
    presentation : "Kiss my beer est un projet que j'ai développer afin de pourvoir mettre en pratique mes connaissances en React. Cet web-app a pour pour vocation de permettre la création d'un répertoire personnel de bières ainsi que de bars.",
    content : `
    <div class="article">
    <h2 class="mb-3">Kiss My Beer</h2>

    <div class="row anim-to-top content-part my-3 align-items-center">
        <div class='col-sm-6 col-lg-3'>
            <img class="img img-article" src="/img/production/kissmybeer/min/mockupphoneadd.png">
        </div>
        <div class='col-sm-6 col-lg-9'>
            <h3>Votre bièrothèque personnelle</h3>
            <p>
                Si vous ne pouvez pas savoir combien de bière vous avez bu, vous pouvez en revanche savoir combien de bières différentes vous avez essayé. Cette fonctionnalité de bièrothèque est là pour vous assister dans la création de votre répertoire personnel de bière. </br>
                </br>
                <strong>Son  objectif ?</strong> vous permettre plus tard de savoir dans quel contexte tel ou tel bière se prête le mieux au moment. La bière after-work ne sera pas la même que la bière after match Top-XIV et encore différente de celle à apprécier ou découvrir en famille.</br>
                Accessible rapidement, votre bièrothèque sera votre meilleur allié lorsque vous vous poserez cette question <i>"qu'est ce que je vais bien pouvoir proposer à mes convives comme bière ?"</i>. </br>
                </br>
                L'avènement des bières artisanales vont permettra d'avoir une collection riche et varié !
            </p>
        </div>
    </div>

    <div class="row content-part">
        <div class="col">
            <div class="anim-to-top">
                <h3 class="mt-2 ">Les fonctionnalités principales de l'application</h4>
                <h4 class="">Répertoire de bière</h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item">
                        <h5>Caractéristiques</h5>
                        <div><p>
                            Les caractéristiques permettent de connaitre le degré d'alcool, connaitre son pays d'origine et savoir ce qu'on en a pensé avec un bref texte.
                        </p></div>
                    </li>
                    <li class="list-group-item">
                        <h5>Catégorisation</h5>
                        <div><p>
                            La catégorisation de la bière permet de rechercher par son type (blonde, brune, etc...), par type de compagnie (entre amis, amoureux, famille).
                        </p></div>
                    </li>
                    <li class="list-group-item">
                        <h5>Lieu de consommation</h5>
                        <div><p>
                            Le lieu de consommation permet de connaitre dans quels bars on a consommé une bière. Fonction utile pour retrouver la fameuse MacDouglas.
                        </p></div>
                    </li>
                </ul>
            </div>
            <div class="row anim-to-top">
                <div class='col-12'>
                    <img class="img" src="/img/production/kissmybeer/min/mockup4-min.png">
                </div>
            </div>
            <div class="row justify-content-center mt-neg-100 anim-to-top">
                <div class='col-lg-8'>
                    <img style="filter: drop-shadow(0px 0px 12px rgba(0,0,0,0.8) );" class="img" src="/img/production/kissmybeer/min/DuvelClassiclaptop.png">
                </div>
            </div>
            <div class="anim-to-top">
                <h4 class="">Carnet d'adresses</h4>
                <ul class="list-group ">
                    <li class="list-group-item">
                        <h5>Adresses des lieux de consommation/achats</h5>
                        <div><p>
                            Grâce à l'adresse on peut facilement retrouver un bar situé dans une ville voulu ou même de trouver un bar en suggestion lorsque nous ne savons pas où aller consommer sa prochaine mousse entre amis.
                        </p></div>
                    </li>
                    <li class="list-group-item">
                        <h5>Catégorisation</h5>
                        <div><p>
                            La catégorisation du lieu, permet d'identifier, la compagnie conseillé pour ce bar (entre amis, famille, collègues), le type de lieu (beer-shop, bar, café, irish-pub, etc..)
                        </p></div>
                    </li>
                    <li class="list-group-item">
                        <h5>Bières testés</h5>
                        <div><p>
                            Cette fonction permettra de lister quel bière on a testé dans le bar choisi. La fonction d'ajout rapide y est intégrer.
                        </p></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `
};


