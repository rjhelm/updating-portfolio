import { GrWindow } from 'react-icons/gr';
import { VscClose, VscRss, VscSearch, VscTriangleUp, VscUnmute } from 'react-icons/vsc';
import { FaBatteryFull, FaCommentAlt } from 'react-icons/fa';

import Clock from '../Clock/Clock';
import Strings from '../../config/strings';
import './Taskbar.scss';

const TaskbarAppInstances = ({
    apps,
    programs,
    data,
    onIconClick,
    onInstanceClick,
    onCloseInstance,
}) => {
    const Instances =({ instances }) => {
        instances.map((instance) => (
            <div
                className='Taskbar-app-instances-item'
                key={instance}
                onClick={() => onInstanceClick(instance)}
            >
                <span className='Taskbar-app-instances-item-title'>
                    {data[instance].title}
                </span>
                <span className='Taskbar-app-instances-item-close' onClick={() => onCloseInstance(instance)}
                >
                    <VscClose />
                </span>
            </div>
        ));

        const App = ({ app, onClick }) => {
            const instances = programs[app.id] || [];
            return (
                <div
                    title={app.name}
                    className={`Taskbar-app${instances.length ? ' Taskbar-app-running' : ''}`}
                    onClick={() => (instances.length ? true : onClick(app))}
                >
                    {app.icon()}
                    <div className='Taskbar-app-instances'>
                        <Instances instances={progras[app.id] || []} />
                    </div>
                </div>
            );
        };
    };

    return apps.map((app) => <App key={app.id} app={app} onClick={onIconClick} />)
};

const Taskbar = ({
    apps,
    programs,
    programsData,
    onIconClick,
    onWindowsClick,
    onInstanceClick,
    onCloseInstance,
}) => (
    <div className='Taskbar'>
        <div className='Taskbar-left'>
            <div className='Tasbar-windows-icon' onClick={onWindowsClick}>
                <GrWindow />
            </div>
            <div className='Taskbar-searchbar'>
                <div className='Taskbar-searchbar-psuedo'>
                    <VscSearch />
                    <span>{Strings.TASKBAR_SEARCH_PLACEHOLDER}</span>
                </div>
                <input type='text' required />
            </div>

            <TaskbarAppInstances
                apps={apps}
                programs={programs}
                data={programsData}
                onIconClick={onIconClick}
                onInstanceClick={onInstanceClick}
                onCloseInstance={onCloseInstance}
            />
        </div>

        <div className='Taskbar-right'>
            <div className='Taskbar-app'>
                <VscTriangleUp />
            </div>
            <div className='Taskbar-app'>
                <VscRss />
            </div>
            <div className='Taskbar-app'>
                <FaBatteryFull />
            </div>
            <div className='Taskbar-app'>
                <VscUnmute />
            </div>
            <div className='Taskbar-app'>
                <FaCommentAlt />
            </div>
            <div className='Taskbar-app'>
                <Clock />
            </div>
        </div>
    </div>
);

export default Taskbar;