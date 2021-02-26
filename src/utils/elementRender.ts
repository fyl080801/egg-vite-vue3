export default ({ prerender }) => {
  // 在组件外部套一个 el-form-item
  prerender(
    ({ injectProxy, context }) => (field, next) => {
      if (!field.formProps) {
        next(field);
        return;
      }

      const formProps = field.formProps;

      delete field.formProps;

      next(
        injectProxy(
          {
            component: 'el-form-item',
            props: formProps,
            children: [field],
          },
          context
        )
      );
    },
    2
  );

  // 在组件内部套一个 el-row
  prerender(() => (field, next) => {
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
  prerender(
    ({ injectProxy, context }) => (field, next) => {
      if (!field.colProps) {
        next(field);
        return;
      }

      const colProps = field.colProps;

      delete field.colProps;

      next(
        injectProxy(
          {
            component: 'el-col',
            props: colProps,
            children: [field],
          },
          context
        )
      );
    },
    1
  );
};
