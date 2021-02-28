<template>
    <div>
        <div class="common-blocks row">
            
            <div v-for="(block, index) in this.blocks" :key="index" :class="'col-' + block.col">
                <div class="block">
                    <div class="block-name">{{ block.title }}</div>
                    <div class="block-value">
                        {{ block.value }}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: { blocks: Array }
}
</script>

<style>

</style>