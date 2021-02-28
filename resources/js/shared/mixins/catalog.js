export default {
  data() {
    return {
      catalog: [],
      componentKey:0
    }
  },
  methods: {
    bindRowClick() {
      const catalogRows = document.querySelectorAll('.catalog__row-item');
      [...catalogRows].forEach(catalogRow => {
        catalogRow.addEventListener('click', this.setRowsClass);
      });
    },
    bindOrderButtonsClick(dataAttr) {
      let that = this;
      const catalogButtons = document.querySelectorAll(dataAttr);
      [...catalogButtons].forEach(catalogButton => {
        catalogButton.addEventListener('click', function (event) {      
          that.sortCatalog({event:event});
        });
      });
    },
    sortCatalog({event:event, defaults: defaults}) {
      
      let target;
      if(event){
        target = event.target;
        if(target.classList.contains('catalog__arrow')){
          target = target.parentNode;
        }
      }
      if(defaults){
        target = document.querySelector(defaults.selector);
      }      
          
      if(target){
        const buttons = document.querySelectorAll('.catalog__row-button');
        if(buttons){
          [...buttons].forEach(button=>{
            const arrow = button.querySelector('.catalog__arrow');
            if(arrow){
              arrow.remove();
            }
          });
        }
        const div = document.createElement('div');
        div.classList.add('catalog__arrow');      
        
        let sortByName = target.getAttribute('data-catalog-sort-by');
        let sortOrder = target.getAttribute('data-catalog-sort-order');
        if(defaults){
          sortByName = defaults.sortByName;
          sortOrder = defaults.sortOrder;
        }

        if(this.catalog[0][sortByName] >= 0){
          if (sortOrder === 'desc') {
  
            this.catalog.sort((a, b) => a[sortByName] < b[sortByName] ? 1 : -1);
            this.catalog.forEach(item => {
              this.recursiveSort(item, sortOrder, sortByName);
            });
           
            if(div.classList.contains('active')){
              div.classList.remove('active');
            }
            target.setAttribute('data-catalog-sort-order', 'asc');
          }
          if (sortOrder === 'asc') {
  
            this.catalog.sort((a, b) => a[sortByName] > b[sortByName] ? 1 : -1);
            this.catalog.forEach(item => {
              this.recursiveSort(item, sortOrder, sortByName);
            });
    
            if(!div.classList.contains('active')){
              div.classList.add('active');
            }
            target.setAttribute('data-catalog-sort-order', 'desc');
          }
    
          target.append(div);
        }       
      }
      this.componentKey++;
    },
    recursiveSort(item, sortOrder, sortByName) {
      if(item.children){
        if (item.children.length != 0) {

          if (sortOrder === 'desc') {

            item.children.sort((a, b) => a[sortByName] < b[sortByName] ? 1 : -1);
          }
          if (sortOrder === 'asc') {

            item.children.sort((a, b) => a[sortByName] > b[sortByName] ? 1 : -1);
          }
          item.children.forEach(element => {
            this.recursiveSort(element, sortOrder, sortByName);
          });          
        }
      }
    },
    setRowsClass() {
      let visibleRows = Array.prototype.slice.call(document.querySelectorAll('.catalog__row-item')).filter(function (item, index) { return item.offsetWidth > 0 && item.offsetHeight > 0 && item.getClientRects().length > 0; });

      if (visibleRows.length != 0) {
        visibleRows.forEach((visibleRow, index) => {
          if (index % 2 == 0) {
            if (visibleRow.classList.contains('background')) {
              visibleRow.classList.remove('background');
            }
          }
          else {
            if (!visibleRow.classList.contains('background')) {
              visibleRow.classList.add('background');
            }
          }
        });
      }
    }
  }
};