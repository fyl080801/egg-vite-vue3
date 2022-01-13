export const ElementExtends = ({ onBeforeRender }) => {
  // 在组件外部套一个 el-form-item
  onBeforeRender(() => (field, next) => {
    if (!field.formProps) {
      next(field);
      return;
    }

    const formProps = field.formProps;

    delete field.formProps;

    next({
      component: 'el-form-item',
      props: formProps,
      children: [field],
    });
  }).depend('elCol');

  // 在组件内部套一个 el-row
  onBeforeRender(() => (field, next) => {
    if (!field.rowProps) {
      next(field);
      return;
    }

    const rowProps = field.rowProps;

    delete field.rowProps;

    field.children = [
      {
        component: 'el-row',
        props: rowProps,
        children: field.children,
      },
    ];

    next(field);
  });

  // 在组件外部套一个 el-col
  onBeforeRender(() => (field, next) => {
    if (!field.colProps) {
      next(field);
      return;
    }

    const colProps = field.colProps;

    delete field.colProps;

    next({
      component: 'el-col',
      props: colProps,
      children: [field],
    });
  }).name('elCol');
};
