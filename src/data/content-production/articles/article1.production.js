export const Article1 = {
    id : 1,
    title : "Jeu du pendu",
    coverImg : "/img/production/jeudupendu/go-game.jpg",
    date : "Juin 2018",
    category : "Développement",
    tags : ["React", "Javascript", "Formulaire contrôlé", "SVG", "Game-code"],
    technos: ["Javascript", "CSS", "HTML", "SVG"],
    librairies : ["Gsap", "React", "Create-React-App"],
    presentation : `Le jeu du pendu est l'une des premières "web-app" où j'exploitai React. Ce petit jeu est une exercice provenant du cours "Réalisez une application web avec React.js" de Christophe Porteneuve, sur OpenClassroom.`,
    content : `

    <div class="article">
        <h2>Jeu du Pendu</h2>
        <div class="content-part">
            <div class="row justify-content-center">
                <div class='col-9'>
                    <img class="img" src="/img/production/jeudupendu/min/ipad&mac.png">
                </div>
            </div>
            <div class="row anim-to-top">
                <div class="col-12">
                    <h3>Résumé</h3>
                    <p>Ce jeu a été mon premier pas dans le monde de React. Grâce à ce jeu j'ai pu perfectionné ma connaissance des expressions régulières et découvrir le contrôle de champ de saisie. La première fois que j'ai développé ce jeu cela m'a pris 3 jours... Pour le défis j'ai refais le jeu avec mes connaissances actuelles, cela m'a pris <b>moins de 1h 30</b> et avec un code carrément <b>plus lisible</b> ! Le genre de défis qui te montre que ta technique a bien évolué et ça rassure !<span class="fs_2">☺️</span></p>
                    <p>Aller c'est gratuit, voici un petit step by step du développement jeu :</p>
                </div>
            </div>
            <div class="row anim-to-top">
                <div class="col-12">
                    <h4>Le state local</h4>
                    <p>Honneur au state, pour déterminer ce dont nous allons avoir besoin.</p>
                </div>
            </div>
            <div class="row justify-content-center anim-to-top">
                <div class='col-8'>
                    <img class="img" src="/img/production/jeudupendu/min/Local-State.png">
                </div>
            </div>
            <div class="row mb-3 anim-to-top">
                <div class="col-12">
                    <h4>Ne faites jamais confiance à l'utilisateur</h4>
                    <p>Afin de faciliter la lecture des données soumis par l'utilisateur, on l'empêche de mettre des caractères spéciaux et tout autre donnée n'étant pas une lettre majuscule.</p>
                    <p>Et comme les dev sont des êtres bienveillants, si l'utilisateur rentre la lettre en minuscule nous nous occupons de la mettre en majuscule.</p>
                </div>
            </div>
            <div class="row justify-content-center mb-3 anim-to-top">
                <div class='col-8'>
                    <img class="img" src="/img/production/jeudupendu/min/controle-de-champ-saisi.png">
                </div>
            </div>
            <div class="row mb-3 anim-to-top">
                <div class="col-12">
                    <h4>Le moteur principal du jeu :</h4>
                    <p>Pour comptabiliser les points, et faire découvrir les lettres trouvés ou ratés c'est en dessous !</p>
                </div>
            </div>
            <div class="row justify-content-center mb-3 anim-to-top">
                <div class='col-8'>
                    <img class="img" src="/img/production/jeudupendu/min/GameMotor.png">
                </div>
            </div>
            <div class="row mb-3 anim-to-top">
                <div class="col-12">
                    <h4>Et enfin le JSX de fin</h4>
                    <p>Bien sûr je vous épargne la partie <b>render</b>(){<b>return</b>()} et l'appel des variables du state... <span class='fs_s'>Vaala vala.</span></p>
                </div>
            </div>
            <div class="row justify-content-center mb-3 anim-to-top">
                <div class='col-8'>
                    <img class="img" src="/img/production/jeudupendu/min/JSX.png">
                </div>
            </div>
            <div class="row mb-3 anim-to-top">
                <div class="col-12">
                    <h4>Mais il manque des choses...</h4>
                    <p>J'ai volontairement pas mis toute la partie du code qui permet de déclarer que vous êtes le <b>grand gagnant</b> ou le pendu. Il n'y a également pas le code permettant de relancer la partie. </p>
                    <p>Si vous voulez testé l'ensemble de code ci-dessus, allez sur mon <a class="clink" href="https://codesandbox.io/s/n54v2olx8j">sandbox</a>.</p>
                    <p>Je suis bien évidement conscient que des améliorations peuvent être apportés au code. Mais comme tout code il est toujours améliorable, et là mon objectif était de vulgarisé "l'agorithme" du jeu.</p>
                </div>
            </div>
        </div>
    </div>
    
    `
};



