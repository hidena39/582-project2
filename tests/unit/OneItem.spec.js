import { shallowMount } from "@vue/test-utils";
import OneItem from "@/components/OneItem.vue";
import { setActivePinia, createPinia } from "pinia";
// import { useUserStore } from "@/store/userlist.js";
// import { useListStore } from "@/store/storelist.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          _id: "64f4fbdc569c886bad338853",
          storename: "IGA",
          categories: [
            {
              category: "produce",
              items: [
                {
                  item: "tofu",
                  purchased: false,
                  time: "9/4/2023, 2:20 PM",
                  byWho: "Olive",
                },
              ],
            },
          ],
        },
      ]),
  })
);

describe("OneItem.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  const $route = {
    params: {
      storename: "IGA",
    },
  };

  it("renders props oneItem when passed", () => {
    const oneItem = "tofu";
    const wrapper = shallowMount(OneItem, {
      propsData: { oneItem },
      global: {
        mocks: {
          $route,
        },
      },
    });
    console.log("testingOneItem", oneItem);
    expect(wrapper.find("p").text()).toBe("tofu");
  });
});
// methods deleteItem is triggered when the button is clicked
// if the delete button hides when the user is not authorized
// purchaseStatus changes when the item is clicked
// div.purchased and div.purchasedTime hide/show with purchasedStatus
