<template>
    <div class="list-view" @scroll="handleScroll">
        <div
            class="list-view-phantom"
            :style="{
                height: contentHeight
            }"
        ></div>
        <div ref="content" class="list-view-content">
            <div
                class="list-view-item"
                :style="{
                    height: itemHe + 'px'
                }"
                v-for="(item, index) in visibleData"
                :key="index"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListView',
    data() {
        return {
            itemHeight: 60,

            itemHe: 30,
            dataArr: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                10,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                10,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                10,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                10
            ],
            visibleData: [1, 2, 3, 4, 5, 6, 7, 8, 10]
        };
    },
    computed: {
        contentHeight() {
            return this.dataArr.length * this.itemHeight + 'px';
        }
    },
    mounted() {
        this.updateVisibleData();
    },
    methods: {
        updateVisibleData(scrollTop) {
            scrollTop = scrollTop || 0;
            const visibleCount = Math.ceil(
                this.$el.clientHeight / this.itemHeight
            );
            const start = Math.floor(scrollTop / this.itemHeight);
            const end = start + visibleCount;
            this.visibleData = this.dataArr.slice(start, end);
            this.$refs.content.style.webkitTransform = `translate3d(0, ${start *
                this.itemHeight}px, 0)`;
        },
        handleScroll() {
            this.hello();
            const scrollTop = this.$el.scrollTop;
            this.updateVisibleData(scrollTop);
        }
    }
};
</script>

<style>
.list-view {
    height: 400px;
    overflow: auto;
    position: relative;
    border: 1px solid #aaa;
}

.list-view-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
}

.list-view-content {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
}

.list-view-item {
    padding: 5px;
    color: #666;
    line-height: 30px;
    margin-top: 30px;
    border: 1px solid red;
    box-sizing: border-box;
}
</style>
