<template>
    <div class="synth_list_group" v-for="arr in itemTr" :key="arr.id">
        <div v-if="arr['synth'][0] != ''">
            <div class="synth_list_group-primary" v-if="!arr['synth'][0] == ''" :class="addUniqueClass(arr['name'], '', false)" v-bind:tier="arr['tier']">
                <invItem :itemImg="arr['icon']" :itemName="arr['name']" />
            </div>

            <ul class="synth_list_group-secondary" >
                <invItemMat v-for="synth in arr['synth']" :key="synth.id" :arr="arr" :synth="synth"/>
            </ul>
            

        </div>

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
            }
        },
    }
</script>