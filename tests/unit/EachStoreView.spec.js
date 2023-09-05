import { shallowMount } from "@vue/test-utils";
import EachStoreView from "@/views/EachStoreView.vue";
import { setActivePinia, createPinia } from "pinia";
// import { useUserStore } from "@/store/userlist.js";
// import { useListStore } from "@/store/storelist.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("EachStoreView.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders props when passed", () => {
    const storename = "testing";
    const wrapper = shallowMount(EachStoreView, {
      propsData: { storename },
    });
    console.log("testingstorename", storename);
    expect(wrapper.find("h2").text()).toBe("testing");
  });
});
