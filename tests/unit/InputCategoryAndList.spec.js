import { shallowMount } from "@vue/test-utils";
import InputCategoryAndList from "@/components/InputCategoryAndList.vue";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "@/store/userlist.js";
import { useListStore } from "@/store/storelist.js";

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

describe("InputCategoryAndList.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  const $route = {
    params: {
      storename: "IGA",
    },
  };

  // it("renders props storename when passed", () => {
  //   const storename = "IGA";
  //   const wrapper = shallowMount(InputCategoryAndList, {
  //     propsData: { storename },
  //     global: {
  //       mocks: {
  //         $route,
  //       },
  //     },
  //   });
  //   console.log("testingstorename", storename);
  //   expect(wrapper.find("p").text()).toBe("IGA");
  // });
});
