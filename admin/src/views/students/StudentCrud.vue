<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="searchChange"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class StudentList extends Vue {
  data: any = {};
  option: any = {};
  page: any = {
    pageSize: 10,
    pageSizes: [10,50,100],

    total: 2
  };

  query: any = {};
  async fetchOption() {
    const res = await this.$http.get("students/option");
    this.option = res.data;
  }

  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async changeSort({ prop, order }) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [prop]: order === "ascending" ? 1 : -1
      };
    }
    this.fetch();
  }

  async searchChange(where,done){
    for(let k in where){
      const filed = this.option.column.find(v=> v.prop === k && v.regex)
      if (filed.regex){
        where[k] = {$regex: where[k]}
      }
    }
    this.query.where = where
    this.fetch()
    done()
  }

  async fetch() {
    const res = await this.$http.get("students", {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  async create(row, done) {
    await this.$http.post("students", row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }

  async update(row, index, done) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`students/${row._id}`, data);
    this.$message.success("修改成功");
    this.fetch();
    done();
  }

  async remove(row) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (error) {
      return;
    }
    await this.$http.delete(`students/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style></style>
