<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const { replace } = useRouter();
const { params, query } = useRoute();
const { path } = params;

replace({ path: '/' + path, query });
</script>
