<template>
    <div class="playthrough">
        <subHeader :headerName="'Playthrough Tips'" />
        <div class="playthrough_content">

            <div class="playthrough_sub-header">
                <h3>Before you begin:</h3>
                <ul>
                    <li>DO NOT USE ANY SHARED PP or STAT BOOST ITEMS!!
                        <p>Your goal is to be very strong for post-game collecting. Stats will reset on next game cycle!</p>
                    </li>
                    <li>Download all 'FREE' DLC. Purchase for further boosts!
                        <p>Give yourself an boost. Even the bought DLC makes grinding much quicker.</p>
                    </li>
                    <li>Attempt to 'OVERKILL' as much as possible!
                        <p>You will spend a lot of time gathering items for synthesis. Save yourself some time.</p>
                    </li>
                    <li>Overkill bosses in fewest turns!
                        <p>You get more EXP, G, & EP the quicker you defeat the bosses, but gain great items from overkills!</p>
                    </li>
                    <li>Level up abilities
                        <p>To gain ability XP, you need to use abilities on higher level enemies, then win battle</p>
                    </li>
                </ul>
            </div>

            <div class="playthrough_sub-header">
                <h3>New Game+ carry over:</h3>
                <ul>
                    <li>Will carry over onto next cycle:
                        <p>Unspent Gold, EP, TP, and Shared PP</p>
                        <p>All Weapons, armor, accessories, items, and costumes</p>
                        <p>Character skill levels</p>
                        <p>Soul search level</p>
                        <p>Title progression (except #103-#107)</p>
                    </li>
                    <li>Reset on next cycle:
                        <p>Character levels (EX skills will be locked again)</p>
                        <p>PP gained from character levels</p>
                        <p>Stats that was boosted</p>
                        <p>Souls and dungeon items</p>
                        <p>True End titles (must aquire true end to re-unlock)</p>
                    </li>
                </ul>
            </div>

            <div class="playthrough_sub-header">
                <h3>Playthrough goals:</h3>
                <ul>
                    <li>First Time Playthrough:
                        <p>Save as much EP, TP, and shared PP</p>
                        <p>Unlock as many souls to gain search levels</p>
                        <p>Get familiar with battle systems and fighting bosses</p>
                        <p>Upon level up, you gain a small amount of PP. This is the character's personal PP and should be used ONLY after the character levels up and asked to spend.</p>
                        <p>Gain useful weapons, active skills, and costumes.</p>
                    </li>
                    <li>Second+ Playthrough:
                        <p>Save as much EP, TP, and shared PP</p>
                        <p>Collect all souls in the area</p>
                        <p>Defeat bosses in fewest turns to gain PP</p>
                        <p>Complete requirements for titles in areas</p>
                        <p>Aquire all Arcane books and Sythesis recipes</p>
                        <p>You can regain most title rewards on EVERY PLAYTHROUGH!</p>
                    </li>
                    <li>Final Playthrough:
                        <p>Plan your best team for the toughest fights:</p>
                        <p>Spend equal amount of PP on your characters (I personally saved 40,000 PP)</p>
                        <p>VIT is quite important, STR should push characters past 10,000 ATK</p>
                        <p>Collect all souls in the area</p>
                        <p>Defeat bosses in fewest turns to gain PP</p>
                        <p>Complete requirements for titles in areas</p>
                        <p>Being collecting trophies #99-#102</p>
                    </li>
                </ul>
            </div>

            <div class="playthrough_sub-header">
                <h3>Aquiring all weapons/armor/accesorries/items:</h3>
                <ul>
                    <li>Item collecting:
                        <p>Overkill everything!</p>
                        <p>York (Snipe) and Anesha (Mystic Body) can Steal. Use as much as possible.</p>
                        <p>Equip on all characters the active skills 'Drop Rate Up' (I don't believe they stack on the same character)</p>
                        <p>York's 'Faceoff' EX skill dramatically increases rare drop rates.</p>
                    </li>
                    <li>
                        Synthesizing:
                        <p>Save game before synthesizing higher-end items</p>
                        <p>There's a chance synthesizing items can fail and make something else</p>
                        <p>Some synthesisze items need to be make only once, then can be bought!</p>
                    </li>
                    <li>
                        Upgrading:
                        <p>Upgrading always successds</p>
                        <p>Use tab buttons to view what items can be upgraded to and materials needed</p>
                        <p>Weapons/armor/accessories must be at max level 5 to be converted.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';

    export default {
        name: "PlaythroughTips",
    components: { subHeader },
    beforeMount() {
        this.$emit('mapOverview', false);
    },
    }
</script>