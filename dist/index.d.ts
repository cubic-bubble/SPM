// / <reference types="node" />
import type { Options, Process, Metadata } from './types'
import { EventEmitter } from 'events'
declare class EventHanlder extends EventEmitter {
    emit: (eventName: string | symbol, ...args: any[]) => boolean
    constructor();
}
export default class SPM extends EventHanlder {
    private UAT
    private LPS
    private CPR
    private cache
    private cacheName
    private __PROCESS_THREADS
    private __ACTIVE_APPLICATIONS
    private __FLASH_APPLICATIONS
    private __MIMETYPE_SUPPORT
    /**
     * Initialize process manager state
     * variables, cache, fetch & load installed
     * packages.
     *
     * @param {Object} options
     *    - CPR   Access configuration to Cubic Package
     *            Repository: { server, version, anchorToken }
     *    - LPS   Locale Package Store client
     *    - UAT   User Account Type
     */
    constructor(options: Options);
    /**
     * Fetch and register all installed packages
     * to process threads list
     */
    load(): Promise<void>;
    /**
     * Return all existing process threads
     * state details
     */
    threads(): Process[];
    /**
     * Return all loaded process theads
     * state details
     */
    loaded(): Process[];
    /**
     * Return a list of process theads
     * state details by their current status
     *
     * @param {String} status   Process status: `LATENT`, `ACTIVE`, `STALLED`
     *
     */
    filter(status: string): Process[];
    /**
     * Check whether a given process thread
     * exists
     *
     * @param {String} sid   Store id of installed package
     *
     */
    exists(sid: string): boolean;
    /**
     * Check whether an application requires
     * or have a missing permissions
     *
     * @param {Object} metadata
     *
     */
    requirePermission({ resource }: Metadata): number | undefined;
    /**
     * Make an external request to get
     * authorization for mandatory permissions
     *
     * @param {String} type        Type of permission: `scope`, `feat`, `context`, ...
     * @param {Object} requestor   Metadata of package requesting permissions
     * @param {Array} list        List of mandatory permissions
     *
     */
    askPermission(type: string, requestor: Metadata, list: string[]): Promise<unknown>;
    /**
     * Generate public access URL of a favicon
     * asset deployed on a CPR
     *
     * @param {Object} metadata
     *
     */
    favicon(metadata: Metadata): string;
    /**
     * Register new process thread
     *
     * @param {Object} process
     *
     * NOTE: Requires & await for mandatory
     *       permissions to complete the registration
     */
    register(process: Process): Promise<boolean>;
    /**
     * Unregister a process
     *
     * @param {String} sid   Store id of installed package
     *                       Use as process ID as well
     *
     */
    unregister(sid: string): void;
    /**
     * Return a given process metadata
     *
     * @param {String} query   Match metadata `sid`, `name` or `nsi`
     *
     */
    metadata(query: string): Metadata | null;
    /**
     * Unregister a process
     *
     * @param {String} type   Opening data or file MIME type
     * @param {Object} argv   Input argument variables to run the process
     *
     */
    open(type: string): boolean;
    /**
     * Spawn a new process
     *
     * @param {String} sid    User installed package store ID as process ID
     * @param {Object} argv   Input argument variables to run the process
     *
     */
    spawn(sid: string): void;
    /**
     * Refresh a running process in-memory
     * metadata with LPS metadata
     *
     * @param {String} sid    Installed package store ID used as process ID
     *
     */
    refresh(sid: string): Promise<void>;
    /**
     * Kill a running process
     *
     * @param {String} sid    Installed package store ID used as process ID
     *
     */
    kill(sid: string): boolean;
    /**
     * Run an application
     *
     * @param {String} name    App name
     * @param {Object} argv    Input argument variables to run the app
     *
     */
    run(name: string): false | {
        quit: () => boolean;
        refresh: () => Promise<void>;
    };
    /**
     * Quit an application
     *
     * @param {String} name    App name
     *
     */
    quit(name: string): boolean;
}
export {}
