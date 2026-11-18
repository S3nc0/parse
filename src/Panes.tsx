import { Group, Panel, Separator } from "react-resizable-panels";

function Panes(){
    return (
    <Group className="panes">
        <Panel defaultSize="47%">
            <section className="editor">editor</section>
        </Panel>
        <Separator className="separator" />
        <Panel defaultSize="53%">
            <section className="preview">preview</section>
        </Panel>
    </Group>
    );
}

export default Panes;