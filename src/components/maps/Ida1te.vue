<template>
    <div class="icn evt119 dungeon dungeon-1"                @click="getEventList('events', 'evt119')"><dungeon /></div>
    <div class="icn evt141 storyevent story-1"               @click="getEventList('events', 'evt141')"><storyevent /></div>
    <div class="icn evt142 soulevent soulevent-1"            @click="getEventList('events', 'evt142')"><soulevent /></div>
    <div class="icn evt143 soulevent soulevent-2"            @click="getEventList('events', 'evt143')"><soulevent /></div>
    <div class="icn evt144 soulevent soulevent-3"            @click="getEventList('events', 'evt144')"><soulevent /></div>
    <div class="icn evt145 soulevent soulevent-4"            @click="getEventList('events', 'evt145')"><soulevent /></div>
    <div class="icn evt146 soulevent soulevent-5"            @click="getEventList('events', 'evt146')"><soulevent /></div>
    <div class="icn evt147 soulevent soulevent-6"            @click="getEventList('events', 'evt147')"><soulevent /></div>
    <div class="icn icn073 town ida town-1"                  @click="getEventList('events', 'icn073')"><idatown /></div>
    <div class="icn icn074 town ida town-2"                  @click="getEventList('events', 'icn074')"><idatown /></div>
    <div class="icn icn078 tablet tablet-1"                  @click="getEventList('events', 'icn078')"><tablet /></div>
    <div class="icn icn079 dungeon dungeon-2"                @click="getEventList('events', 'icn079')"><dungeon /></div>

    <div class="icn i101 soul soul-1"                      @click="getEventList('souls', 'i101')"><soul /></div>
    <div class="icn i102 soul soul-2"                      @click="getEventList('souls', 'i102')"><soul /></div>
    <div class="icn i103 soul soul-3"                      @click="getEventList('souls', 'i103')"><soul /></div>
    <div class="icn i104 soul soul-4"                      @click="getEventList('souls', 'i104')"><soul /></div>
    <div class="icn i105 soul soul-5"                      @click="getEventList('souls', 'i105')"><soul /></div>
    <div class="icn i106 soul soul-6"                      @click="getEventList('souls', 'i106')"><soul /></div>
    <div class="icn i107 soul soul-7"                      @click="getEventList('souls', 'i107')"><soul /></div>
    <div class="icn i108 soul soul-8"                      @click="getEventList('souls', 'i108')"><soul /></div>
    <div class="icn i109 soul soul-9"                      @click="getEventList('souls', 'i109')"><soul /></div>
    <div class="icn i110 soul soul-10"                     @click="getEventList('souls', 'i110')"><soul /></div>
    <div class="icn i111 soul soul-11"                     @click="getEventList('souls', 'i111')"><soul /></div>
    <div class="icn i112 soul soul-12"                     @click="getEventList('souls', 'i112')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import idatown from '@/components/parts/ida_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapIda1TrueEnd",
        components: { storyevent, soulevent, idatown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'ida-2',
                defaultEvt: 'evt119',
            }
        },
        emits: ['setDefaults', 'evtSelect'],
        mounted() {
            this.$emit('setDefaults', ['events', this.defaultEvt, 'tab1', this.nextMap]);
        },
        methods: {
            getEventList(type, id) {
                this.$emit('evtSelect', [type, id, 'tab1']);
            },
        },
    }
</script>