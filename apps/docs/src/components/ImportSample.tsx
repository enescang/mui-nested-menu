import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageFromRoute } from '@/core/routes/routeMap';
import { CodeBlock } from '@/components/CodeBlock';
import { Space, Typography } from 'ui';

interface ImportSampleProps {
    importCode?: string;
}

export const PageHeader = ({ importCode: code }: ImportSampleProps) => {
    const location = useLocation();
    const info = getPageFromRoute(location.pathname);

    return (
        <Fragment>
            <Typography variant="h2">Import</Typography>
            <CodeBlock code={code ?? `import { ${info?.name} } from 'mui-nested-menu';`} />
            <Space size="48px" vertical />
            <Typography variant="h2">Overview</Typography>
        </Fragment>
    );
};
