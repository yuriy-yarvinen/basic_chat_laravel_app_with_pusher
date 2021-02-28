<template>
  <div class="catalog__item">
    <li>
      <div
        class="row m-0 catalog__row catalog__row-item pointer pt-1 pb-1"
        :class="returnClass"
        @click="toggle"
      >
        <div
          v-for="(div, index) in divs"
          :key="`${index}div`"
          :class="div.class"
        >
          <div class="d-inline-block" v-if="isFolder && index == 0">
            <span class="catalog__button" v-if="isOpen">–</span
            ><span class="catalog__button" v-else>+</span>
          </div>
          {{ item[div.prop] }}
        </div>
      </div>
      <ul class="p-0 mb-0" v-show="isOpen" v-if="isFolder">
        <tree-item
          v-for="(child, index) in item.children"
          :key="index"
          :divs="divs"
          :item="child"
          :level="dataLevel + 1"
        ></tree-item>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    level: Number,
    divs: Array,
  },
  data: function () {
    return {
      isOpen: false,
      dataLevel: this.level,
    };
  },
  computed: {
    isFolder: function () {
      return this.item.children && this.item.children.length;
    },
    returnClass: function () {
      let className = "";
      if (this.dataLevel == 1) {
        className = "padding-left-10";
      }
      if (this.dataLevel == 2) {
        className = "padding-left-20";
      }
      if (this.dataLevel == 3) {
        className = "padding-left-30";
      }
      if (this.dataLevel == 4) {
        className = "padding-left-50";
      }
      return className;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
  },
};
</script>

<style>
.catalog__item ul,
.catalog__item li {
  list-style-type: none;
}
.catalog__row-first {
  background: #736a9b;
  color: #fff;
}
.catalog__row-item.background {
  background-color: aliceblue;
}
.catalog__row-item {
  background-color: #ffffff;
}
.catalog__row-item:hover {
  background-color: #e1e3f9e0;
  transition: 0.5s background-color;
  -webkit-transition: 0.5s background-color;
  -moz-transition: 0.5s background-color;
}

.catalog__button {
  background: #534d6d;
  color: #fff;
  padding: 0px 5px 0px;
  text-align: center;
  border-radius: 4px;
  opacity: 0.5;
  display: inline;
  height: 20px;
  margin-top: 1px;
  font-size: 12px;
  font-weight: bold;
}
.padding-left-10 {
  padding-left: 10px;
}
.padding-left-20 {
  padding-left: 20px;
}
.padding-left-30 {
  padding-left: 30px;
}
.padding-left-50 {
  padding-left: 50px;
}

.catalog__arrow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.catalog__arrow::after {
  content: "\F078";
  display: block;
  position: absolute;
  right: 33px;
  top: 15px;
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  font-size: 12px;
}
.catalog__arrow.active::after {
  content: "\f077";
}
.catalog__row-button{
  cursor: pointer;
  user-select: none;
}
</style>