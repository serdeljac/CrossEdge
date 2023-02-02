<template>
    <div class="playthrough">
        <subHeader :headerName="'Playthrough Tips'" :backlink="'home'"/>
        <div class="playthrough_content">

            <div class="playthrough_sub-header">
                <h3>Before you begin:</h3>
                <ul>
                    <li>Download all 'FREE' DLC. Purchase for further boosts!
                        <p>Give yourself an boost. Even the bought DLC makes grinding much quicker.</p>
                        <p>Recommended purchases: 'Exotic Pack', 'Beauty & Beast', and 'Upgrade Point Pack'.</p>
                        <p>Avoid 'Open Gallery' and 'Open Voice' as you will unlock these automatically later.</p>
                    </li>

                    <li>
                        Start game on HARD MODE!
                        <p>If you achieve True End, you can access a bonus area (Ida-3)</p>
                        <p>You will also be able to transfer all Inventory/Skill Levels/G/EP/TP/PP onto NG+.</p>
                        <p>With the DLC and recommended purchases, you can beat the game without much difficulty.</p>
                    </li>

                    <li>DO NOT USE ANY SHARED PP or STAT BOOST ITEMS!!
                        <p>Your stats reset on every playthrough. Make sure to save enouph for Ida-2 boss fights.</p>
                    </li>

                    <li>Attempt to 'OVERKILL' as much as possible!
                        <p>You will spend a lot of time gathering items for synthesis. Save yourself some time.</p>
                        <p>Overkilling bosses may be more important than defeating them in fewer turns.</p>
                    </li>

                    <li>Level up abilities!
                        <p>To gain new abilities, you need to level up certain skills to a certain level.</p>
                        <p>To gain ability XP, fight higher level enemies, then win the battle.</p>
                    </li>

                    <li>Purchase plenty of 'Serum Poweder'!
                        <p>Random Battles will be an anoyance, so avoid unessesary battles with Serum Powder.</p>
                        <p>With the DLC and money you accumulate, you should have plenty of money to keep a full stock.</p>
                    </li>
                </ul>
            </div>

            <div class="playthrough_sub-header">
                <h3>New Game+ carry over (Hard Mode):</h3>
                <ul>
                    <li>Will carry over onto next cycle:
                        <p>Unspent Gold, EP, TP, and Shared PP.</p>
                        <p>All invenotry.</p>
                        <p>Character skill levels.</p>
                        <p>Soul search level.</p>
                        <p>Title progression (except #103-#107).</p>
                    </li>
                    <li>Resets on next cycle:
                        <p>Character levels (EX skills will be locked again).</p>
                        <p>PP gained from character levels.</p>
                        <p>Any stats that was boosted.</p>
                        <p>Souls and dungeon treasures.</p>
                        <p>NOTE: Some title conditions need to be met again to reclaim rewards (ex. True End Titles #31-#50, #72-#80)</p>
                    </li>
                </ul>
            </div>

            <div class="playthrough_sub-header">
                <h3>Playthrough goals:</h3>
                <ul>
                    <li>First Time Playthrough:
                        <p>Learn the battle system and find the best team that works for you (I chose York, Felicia, Morigan, and Marie for the most part).</p>
                        <p>Save as much EP, TP, and shared PP.</p>
                        <p>Unlock as many souls to gain search levels.</p>
                        <p>Upon level up, you gain a small amount of PP. This is the character's personal PP and should be used ONLY after the character levels up and asked to spend.</p>
                        <p>Gain useful weapons, active skills, and costumes.</p>
                        <p>Unlock all of York's Skills (Cloud Form comes in handy for farming and NG+ progression)</p>
                    </li>
                    <li>Second+ Playthrough:
                        <p>Save as much EP, TP, and shared PP</p>
                        <p>Collect all souls in the area</p>
                        <p>Overkill bosses in fewest turns to gain PP and rare items. Use Yorks 'Face Off' if possible.</p>
                        <p>Complete requirements for titles in areas.</p>
                        <p>Aquire all Arcane books and Sythesis recipes.</p>
                        <p>You can regain most title rewards on EVERY PLAYTHROUGH!</p>
                    </li>
                    <li>Final Playthrough:
                        <p>This playthrough is for collecting all weapons/armor/accessories/items.</p>
                        <p>Plan your best team for the toughest fights (My setup has worked for platinum).</p>
                        <p>Spend equal amount of PP on your characters that use Fanatic Rave or "_______________"(I personally saved 40,000 PP).</p>
                        <p>STR should be close to 10,000 for some characters, VIT is also quite important.</p>
                        <p>Collect all souls in every area.</p>
                        <p>Overkill bosses in fewest turns to gain PP and rare items. Use Yorks 'Face Off' if possible.</p>
                        <p>Aquire all titles. Remaining for final playthrough should be #99-#102 and #113-#123.</p>
                        <p>If strong enough, fight in Ida-3 for some really good rare items.</p>
                    </li>
                </ul>
            </div>

            <div class="playthrough_sub-header">
                <h3>Aquiring all weapons/armor/accesorries/items:</h3>
                <ul>
                    <li>Item collecting:
                        <p>Overkill everything!</p>
                        <p>York (Snipe) and Anesha (Mystic Body) can Steal. Use as much as possible.</p>
                        <p>Equip on all characters the active skills 'Drop Rate Up' (I don't believe they stack on the same character).</p>
                        <p>York's 'Faceoff' EX skill greatly increases rare drop rates.</p>
                    </li>
                    <li>
                        Synthesizing:
                        <p>Save game before synthesizing higher-end gear.</p>
                        <p>There's a chance synthesizing items can fail and make something else.</p>
                        <p>Some synthesisze items need to be make only once, then can be bought!</p>
                    </li>
                    <li>
                        Upgrading:
                        <p>Upgrading always successds.</p>
                        <p>Use tab buttons to view what items can be upgraded to and materials needed.</p>
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