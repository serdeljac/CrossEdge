<template>
    <div class="icn order dungeon dungeon-1"          @click="getEventList('events', 'evt075')" order="75"><dungeon /></div>
    <div class="icn order storyevent story-1"         @click="getEventList('events', 'evt076')" order="76"><storyevent /></div>
    <div class="icn order soulevent soulevent-1"      @click="getEventList('events', 'evt077')" order="77"><soulevent /></div>
    <div class="icn order soulevent soulevent-2"      @click="getEventList('events', 'evt078')" order="78"><soulevent /></div>
    <div class="icn order soulevent soulevent-3"      @click="getEventList('events', 'evt079')" order="79"><soulevent /></div>                        
    <div class="icn order storyevent story-2"         @click="getEventList('events', 'evt080')" order="80"><storyevent /></div>
    <div class="icn order storyevent story-3"         @click="getEventList('events', 'evt081')" order="81"><storyevent /></div>
    <div class="icn order soulevent soulevent-4"      @click="getEventList('events', 'evt082')" order="82"><soulevent /></div>
    <div class="icn order soulevent soulevent-5"      @click="getEventList('events', 'evt083')" order="83"><soulevent /></div>
    <div class="icn order dungeon dungeon-2"          @click="getEventList('events', 'evt084')" order="84"><dungeon /></div>
    <div class="icn town brosste town-1"              @click="getEventList('events', 'icn042')"><brosstetown /></div>
    <div class="icn town brosste town-2"              @click="getEventList('events', 'icn043')"><brosstetown /></div>
    <div class="icn tablet tablet-1"                  @click="getEventList('events', 'icn044')"><tablet /></div>
    <div class="icn tablet tablet-2"                  @click="getEventList('events', 'icn045')"><tablet /></div>
    <div class="icn tablet tablet-3"                  @click="getEventList('events', 'icn046')"><tablet /></div>
    <div class="icn dungeon dungeon-3"                @click="getEventList('events', 'icn047')"><dungeon /></div>

    <div class="icn soul soul-1"                      @click="getEventList('souls', 'b201')"><soul /></div>
    <div class="icn soul soul-2"                      @click="getEventList('souls', 'b202')"><soul /></div>
    <div class="icn soul soul-3"                      @click="getEventList('souls', 'b203')"><soul /></div>
    <div class="icn soul soul-4"                      @click="getEventList('souls', 'b204')"><soul /></div>
    <div class="icn soul soul-5"                      @click="getEventList('souls', 'b205')"><soul /></div>
    <div class="icn soul soul-6"                      @click="getEventList('souls', 'b206')"><soul /></div>
    <div class="icn soul soul-7"                      @click="getEventList('souls', 'b207')"><soul /></div>
    <div class="icn soul soul-8"                      @click="getEventList('souls', 'b208')"><soul /></div>
    <div class="icn soul soul-9"                      @click="getEventList('souls', 'b209')"><soul /></div>
    <div class="icn soul soul-10"                     @click="getEventList('souls', 'b210')"><soul /></div>
    <div class="icn soul soul-11"                     @click="getEventList('souls', 'b211')"><soul /></div>
    <div class="icn soul soul-12"                     @click="getEventList('souls', 'b212')"><soul /></div>
    <div class="icn soul soul-13"                     @click="getEventList('souls', 'b213')"><soul /></div>
    <div class="icn soul soul-14"                     @click="getEventList('souls', 'b214')"><soul /></div>
    <div class="icn soul soul-15"                     @click="getEventList('souls', 'b215')"><soul /></div>
    <div class="icn soul soul-16"                     @click="getEventList('souls', 'b216')"><soul /></div>
</template>

<script lang="ts">
    import storyevent from '@/components/parts/storyevent.vue';
    import soulevent from '@/components/parts/soulevent.vue';
    import brosstetown from '@/components/parts/brosste_town.vue';
    import tablet from '@/components/parts/tablet.vue';
    import dungeon from '@/components/parts/dungeon.vue';
    import soul from '@/components/parts/soul.vue';

    export default {
        name: "MapBrosste2",
        components: { storyevent, soulevent, brosstetown, tablet, dungeon, soul },
        data() {
            return {
                nextMap: 'brosste-3',
                defaultEvt: 'evt075',
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