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

                if (sel_place === 'pri') {

                    toggleSub(sel_tier);
                    complete();

                } else if (sel_place === 'sec') {

                    if (sel_mat !== undefined) {
                        toggleList(sel, sel_class);
                        return false;
                    }
                
                    toggleList(sel, sel_class);
                }

                //When weapon deacts/acts, check subsequent weapons and toggle 
                function toggleSub(t) {
                
                    $('.synth_list_group-primary').each(function () {
                        const cur = $(this);
                        const cur_tier = cur.attr('tier');
                        const cur_class = cur.hasClass('deact');
                        const matchFound = cur_tier.includes(t);

                        if (matchFound && cur_class) {
                            toggleList(cur, true)
                        } else if (matchFound && !cur_class) {
                            toggleList(cur, false)
                        }
                    });

                }

                //Toggle Deactivate and Activate list item
                function toggleList(s, b) {
                    if (b) {
                        s.removeClass('deact');
                    } else {
                        s.addClass('deact');
                    }
                }

                //If the primary is deactivated/activated, toggle it's synth materials equivilantly
                function complete() {
                    $('.synth_list_group-primary').each(function () {
                        const cur = $(this);
                        const cur_class = cur.hasClass('deact');
                        const cur_list = cur.siblings('li');

                        if (cur_class) { toggleList(cur_list, false) }
                        else { toggleList(cur_list, true) }
                    })
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