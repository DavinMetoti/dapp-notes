import React from "react";
import ActiveNote from './ActiveNote';
import Archive from './Archive';

function BodySection({ onDelete, onActive, onArchive, activeDatas, archiveDatas }) {
    return (
        <React.Fragment>
            <section className="container">
                <div className="title-container">
                    <h2 className="title">Catatan Aktif</h2>
                    {
                        activeDatas.length !== 0
                            ? (<ActiveNote onDelete={onDelete} notes={activeDatas} onActive={onActive} />)
                            : (<p className='text-gray-500'>Tidak ada catatan</p>)
                    }
                </div>
            </section>
            <section className="container">
                <div className="title-container">
                    <h2 className="title">Arsip</h2>
                    {
                        archiveDatas.length !== 0
                            ? (<Archive onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} />)
                            : (<p className='text-gray-500'>Tidak ada catatan</p>)
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default BodySection;