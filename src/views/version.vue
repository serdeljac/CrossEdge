<template>
    <div class="version">
        <subHeader :headerName="'Version History'" :backlink="'home'" />
        <div class="version_content">
            <section class="version_sub-header">
                <h3>v1.1.1 - March 27, 2023 </h3>
                <div class="version_description">
                    <ul>
                        <li>Item name corrections</li>
                        <li>Minor UI fixes</li>
                    </ul>
                </div>
                <hr>
            </section>
            <section class="version_sub-header">
                <h3>v1.0.0 - Feburary 2, 2023 </h3>
                <div class="version_description">
                    <ul>
                        <li>Website deployment</li>
                    </ul>
                </div>
                <hr>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import subHeader from '@/components/main-subheader.vue';

export default {
    name: "VersionHistory",
    components: { subHeader },
    beforeMount() {
        this.$emit('mapOverview', false);
    },
}
</script>