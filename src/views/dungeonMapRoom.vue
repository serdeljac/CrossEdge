<template>
    <div class="dunMaproom">
        <subHeader :headerName="'Dungeon Maps'" :backlink="'home'"/>
        <div class="dunMaproom_contents">
            <section class="mapblock renuit" @click="chooseMap('Renuit')">
                <h3>Renuit</h3>
                <p>(Zeine 1 to Wilkiet 1)</p>
                <div class="mapblock-contain">
                    <img src="@/assets/maps/dungeon/Renuit.jpg" alt="Renuit">
                </div>
            </section>

            <section class="mapblock reveldead" @click="chooseMap('Reveldead')">
                <h3>Reveldead</h3>
                <p>(Wilkiet 1 to Brosste 1)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Reveldead.jpg" alt="Reveldead">
                </div>
            </section>

            <section class="mapblock midbase" @click="chooseMap('Midbase')">
                <h3>Midbase</h3>
                <p>(Brosste 1 to Wilkiet 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Midbase.jpg" alt="Midbase">
                </div>
            </section>

            <section class="mapblock hellzeit" @click="chooseMap('Hellzeit')">
                <h3>Hellzeit</h3>
                <p>(Wilkiet 2 to Zeine 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Hellzeit.jpg" alt="Hellzeit">
                </div>
            </section>

            <section class="mapblock laurelite" @click="chooseMap('Laurelite')">
                <h3>Laurelite</h3>
                <p>(Zeine 2 to Zeine 3)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Laurelite.jpg" alt="Laurelite">
                </div>
            </section>

            <section class="mapblock charlephene" @click="chooseMap('Charlephene')">
                <h3>Charlephene</h3>
                <p>(Zeine 3 to Wilkiet 3)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Charlephene.jpg" alt="Charlephene">
                </div>
            </section>

            <section class="mapblock arcadia" @click="chooseMap('Arcadia')">
                <h3>Arcadia</h3>
                <p>(Wilkiet 3 to Brosste 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Arcadia.jpg" alt="Arcadia">
                </div>
            </section>

            <section class="mapblock bellkant" @click="chooseMap('Bellkant')">
                <h3>Bell Kant</h3>
                <p>(Brosste 2 to Brosste 3)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Bellkant.jpg" alt="Bellkant">
                </div>
            </section>

            <section class="mapblock fettroad" @click="chooseMap('Fettroad')">
                <h3>Fett Road</h3>
                <p>(Brosste 3 to Pragma 1)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Fettroad.jpg" alt="Fettroad">
                </div>
            </section>

            <section class="mapblock sazaruka" @click="chooseMap('Sazaruka')">
                <h3>Sazaruka</h3>
                <p>(Pragma 1 to Pragma 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Sazaruka.jpg" alt="Sazaruka">
                </div>
            </section>

            <section class="mapblock ripquake" @click="chooseMap('Ripquake')">
                <h3>Ripquake</h3>
                <p>(Pragma 2 to Pragma 3)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Ripquake.jpg" alt="Ripquake">
                </div>
            </section>

            <section class="mapblock endelite" @click="chooseMap('Endelite')">
                <h3>En Delite</h3>
                <p>(Pragma 3 to Ida 1)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Endelite.jpg" alt="Endelite">
                </div>
            </section>
        </div>
        <subHeader :headerName="'DLC Dungeon Maps'" />
        <div class="dunMaproom_contents">

            <section class="mapblock eacanal" @click="chooseMap('Eacanal')">
                <h3>Ea Canal</h3>
                <p>(Ziene 1)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Eacanal.jpg" alt="Eacanal">
                </div>
            </section>

            <section class="mapblock nachtlark" @click="chooseMap('Nachtlark')">
                <h3>Nachtlark</h3>
                <p>(Wilkiet 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Nachtlark.jpg" alt="Nachtlark">
                </div>
            </section>

            <section class="mapblock fiestabarra" @click="chooseMap('Fiestabarra')">
                <h3>Fiesta Barra</h3>
                <p>(Brosste 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Fiestabarra.jpg" alt="Fiestabarra">
                </div>
            </section>

            <section class="mapblock schinebaal" @click="chooseMap('Schinebaal')">
                <h3>Schine Baal</h3>
                <p>(Pragma 2)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Schinebaal.jpg" alt="Schinebaal">
                </div>
            </section>

            <section class="mapblock eldehel" @click="chooseMap('Eldehel')">
                <h3>Eldehel</h3>
                <p>(Ida 1)</p>
                <div class="mapblock-contain">
                    <img src="../assets/maps/dungeon/Eldehel.jpg" alt="Eldehel">
                </div>
            </section>

        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';

export default {
    name: 'dunMaproom',
    components: { subHeader },
    beforeMount() {
        this.$emit('mapOverview', false);
    },
    methods: {
        chooseMap(map) {
            const pushArr = [map, 'other']
            this.$router.push({ name: 'dungeonDisplay', params: { dungeon: map } });
        }
    }
}
</script>