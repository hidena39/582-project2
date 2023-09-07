import { shallowMount } from "@vue/test-utils";
import OneCategory from "@/components/OneCategory.vue";
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

  it("renders props oneCategory when passed", () => {
    const oneCategory = "produce";
    const wrapper = shallowMount(OneCategory, {
      propsData: { oneCategory },
      global: {
        mocks: {
          $route,
        },
      },
    });
    console.log("testingOneCategory", oneCategory);
    expect(wrapper.find("h3").text()).toBe("produce");
  });
});
// delete button delete the chosen category
//delete button hides when the user is not authorized
