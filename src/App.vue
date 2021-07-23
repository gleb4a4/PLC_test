<template>
  <div class="container-fluid">
    <h2 class="m-5">
      Kanban Board
    </h2>
    <div class="row justify-content-center">
      <Column
        v-for="(column, index) in columns"
        :column="column"
        :key="index"
        @cardMoved="moveCardToColumn($event, column)"
        @newcard="handleNewCard($event, column)"
      />
    </div>
    <modal v-if="$store.getters['modal/getModalVisible']"> </modal>
  </div>
</template>

<script>
import Column from "./components/Column";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Column,
    Modal,
  },
  data() {
    return {
      columns: [
        {
          name: "TO-DO",
          cards: [
            {
              value: "Prepare breakfast",
            },
            {
              value: "Go to the market",
            },
            {
              value: "Do the laundry",
            },
          ],
        },
        {
          name: "In Progress",
          cards: [],
        },
        {
          name: "Done",
          cards: [],
        },
      ],
    };
  },

  methods: {
    moveCardToColumn(data, newColumn) {
      const formerColumn = this.columns.find((column) => {
        // Get all the card values in a column.
        const cardValues = column.cards.map((card) => card.value);
        return cardValues.includes(data);
      });

      // Remove card from former column.
      formerColumn.cards = formerColumn.cards.filter(
        (card) => card.value !== data
      );

      // Add card to the new column.
      newColumn.cards.push({ value: data });
    },
    handleNewCard(data, column) {
      // Add new card to column.
      column.cards.unshift({ value: data });
    },
  },
  created() {
    this.$store.dispatch("cart/getSeasons");

    console.log(this.$store.getters.getSeasons);
  },
};
</script>

<style>
h2 {
  text-align: center;
}
.right-close {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  height: 100%;
}
.elemntoption {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
}
.close {
  width: 100px;
  margin-left: 550px !important;
}
</style>
