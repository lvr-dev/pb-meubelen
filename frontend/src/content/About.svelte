<div class="content-wrapper">
    <div class="card">
        <div class="card-image">
            <img 
            src="assets/pippi-benneheij_1.jpeg" 
            alt="Pippi aan het werk"
            />
        </div>
        <div class="card-content">
            <p>Ik ben Pippi Benneheij en ik studeer sinds 2019 aan het Hout en Meubileringscollege (HMC) in Amsterdam.</p>
            <p>De opleidingsrichting die ik heb gekozen is ondernemend meubelmaker op niveau 4.</p>
            <p>Mijn ambitie is om zelf een bedrijf te kunnen starten die meubels en interieurbouw doet. </p>
            <p>Doordat ik ASS heb geeft een eigen bedrijf mij meer ruimte om alles zo te plannen dat ik mijn rust kan pakken wanneer nodig, maar ik toch kan blijven doen wat ik het leukst vind om te doen
            en dat is werken met hout, met het bedenken van creative projecten en leuke oplossingen. </p>
        </div>
    </div>
</div>

<style>
.card {
	background-color: rgb(22,13,8);
	padding-bottom: 0.2rem;
	display: flex;
	flex-direction: row;
}
.card-image {
    float: left;
    min-width: 240px;
}
.card-content {
    padding: 1rem;
}

@media only screen and (max-width: 825px) {
    .card {
        width: 90vw;
        margin: 0 auto;
    }

    .card-content {
        border-top: solid 1px rgb(70,70,70);
        border-right: solid 1px rgb(70,70,70);
        border-bottom: solid 1px rgb(70,70,70);
    }
}

@media only screen and (max-width: 450px) {
    .card {
        flex-direction: column;
        border: none;
    }

    .card-content {
        border-left: solid 1px rgb(70,70,70);
        border-right: solid 1px rgb(70,70,70);
        border-bottom: solid 1px rgb(70,70,70);
    }
}

</style>