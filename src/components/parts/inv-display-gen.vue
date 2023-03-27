<template>
    <div class="synth_list_group" v-for="arr in itemTr" :key="arr.id">

        <ul v-if="arr['synth'][0] != ''" :class="addUniqueClass(arr['name'], '', false)">

            <li class="synth_list_group-primary sel" place="pri" v-bind:tier="arr['tier']">
                <invItem :itemImg="arr['icon']" :itemName="arr['name']"/>
            </li>

            <invItemMat class="synth_list_group-secondary synth-grid-4col sel" v-for="synth in arr['synth']" :key="synth.id" :arr="arr" :synth="synth"/>

        </ul>

    </div>

</template>

<script lang="ts">
import invItem from '@/components/parts/inv-display.vue';
import invItemMat from '@/components/parts/inv-display-gen-mat.vue'
import $ from 'jquery';

    export default {
        name: 'Image&Name',
        props: ['itemTr'],
        components: {invItem, invItemMat},
        data() {
            return {
            }
        },
        mounted() {
            $('.sel').click(function () {

                const sel = $(this);
                const sel_place = sel.attr('place');
                const sel_tier = sel.attr('tier');
                const sel_class = sel.hasClass('deact');
                const sel_mat = sel.attr('indx');

                // console.log('Clicked - {Place: ' + sel_place + ', Tier: ' + sel_tier + ', hasClass: ' + sel_class + '}');

                if (sel_place === 'pri') {

                    // toggleList(sel, sel_class, sel_place);


                } else if (sel_place === 'sec') {

                    if (sel_mat !== undefined) {
                        toggleList(sel, sel_class);
                        return false;
                    }

                    // toggleList(sel, sel_class);
                    // checkWeapons(sel_tier);
                }

                function checkWeapons(tier) {
                    $('.synth_list_group-primary').each(function() {

                        const cur = $(this);
                        const cur_tier = cur.attr('tier');
                        const matchFound = cur_tier.includes(tier);

                        if (matchFound) {
                            const cur_class = cur.hasClass('deact');
                            toggleList(cur, cur_class)
                        }

                    })
                }

                //Toggle Opacity
                function toggleList(s, b, p) {
                    if (b) {
                        s.removeClass('deact');
                    } else {
                        s.addClass('deact');
                    }

                    if (p) {
                        console.log('true')
                    }
                }
            })
        },
        methods: {
            checkthis(par, name, tier) {

                const parent = this.addUniqueClass(par, '', false);
                const child = this.addUniqueClass(par, name, true);
                const materialSelect = $('.' + parent + '.' + child);

                if (materialSelect.hasClass('active')) {
                    materialSelect.removeClass('active')
                } else {
                    materialSelect.addClass('active')
                }




                // const parentSel = $('.genlist_group' + '.' + child).attr('tier', tier);
                // if (parentSel.hasClass('active')) {
                //     parentSel.removeClass('active');
                // } else {
                //     parentSel.addClass('active');
                //     const limit = $('.genlist_group').length;
                    
                //     for (let i = 1; i < (limit + 1); i++) {
                //         console.log(i);
                //         const chk = $('.genlist:nth-of-type(' + (i + 1) + ') .genlist_group').attr('tier')
                        
                //         console.log(tier, chk)

                //         if (tier == chk) {
                //             console.log('ok')
                //         }
                //     }
                // }
            },
            addUniqueClass(par, name, request) {

                    const parent = par.replace(/[^\w]/g, "");
                    var child = '';
                    if (name) {
                        var child = name.replace(/[^\w]/g, "");
                    }

                    if (par == name) {
                        var child = child + '1'
                    }
                if (!request) {
                    return parent + ' ' + child;
                } else {
                    return child
                }
            },
            
        },
    }
</script>