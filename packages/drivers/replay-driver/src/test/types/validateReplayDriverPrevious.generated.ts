/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/replay-driver-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_FileSnapshotReader": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_FileSnapshotReader():
    TypeOnly<old.FileSnapshotReader>;
declare function use_current_ClassDeclaration_FileSnapshotReader(
    use: TypeOnly<current.FileSnapshotReader>);
use_current_ClassDeclaration_FileSnapshotReader(
    get_old_ClassDeclaration_FileSnapshotReader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_FileSnapshotReader": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_FileSnapshotReader():
    TypeOnly<current.FileSnapshotReader>;
declare function use_old_ClassDeclaration_FileSnapshotReader(
    use: TypeOnly<old.FileSnapshotReader>);
use_old_ClassDeclaration_FileSnapshotReader(
    get_current_ClassDeclaration_FileSnapshotReader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFileSnapshot": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFileSnapshot():
    TypeOnly<old.IFileSnapshot>;
declare function use_current_InterfaceDeclaration_IFileSnapshot(
    use: TypeOnly<current.IFileSnapshot>);
use_current_InterfaceDeclaration_IFileSnapshot(
    get_old_InterfaceDeclaration_IFileSnapshot());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFileSnapshot": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFileSnapshot():
    TypeOnly<current.IFileSnapshot>;
declare function use_old_InterfaceDeclaration_IFileSnapshot(
    use: TypeOnly<old.IFileSnapshot>);
use_old_InterfaceDeclaration_IFileSnapshot(
    get_current_InterfaceDeclaration_IFileSnapshot());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OpStorage": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OpStorage():
    TypeOnly<old.OpStorage>;
declare function use_current_ClassDeclaration_OpStorage(
    use: TypeOnly<current.OpStorage>);
use_current_ClassDeclaration_OpStorage(
    get_old_ClassDeclaration_OpStorage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OpStorage": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OpStorage():
    TypeOnly<current.OpStorage>;
declare function use_old_ClassDeclaration_OpStorage(
    use: TypeOnly<old.OpStorage>);
use_old_ClassDeclaration_OpStorage(
    get_current_ClassDeclaration_OpStorage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReadDocumentStorageServiceBase": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReadDocumentStorageServiceBase():
    TypeOnly<old.ReadDocumentStorageServiceBase>;
declare function use_current_ClassDeclaration_ReadDocumentStorageServiceBase(
    use: TypeOnly<current.ReadDocumentStorageServiceBase>);
use_current_ClassDeclaration_ReadDocumentStorageServiceBase(
    get_old_ClassDeclaration_ReadDocumentStorageServiceBase());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReadDocumentStorageServiceBase": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReadDocumentStorageServiceBase():
    TypeOnly<current.ReadDocumentStorageServiceBase>;
declare function use_old_ClassDeclaration_ReadDocumentStorageServiceBase(
    use: TypeOnly<old.ReadDocumentStorageServiceBase>);
use_old_ClassDeclaration_ReadDocumentStorageServiceBase(
    get_current_ClassDeclaration_ReadDocumentStorageServiceBase());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayController": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReplayController():
    TypeOnly<old.ReplayController>;
declare function use_current_ClassDeclaration_ReplayController(
    use: TypeOnly<current.ReplayController>);
use_current_ClassDeclaration_ReplayController(
    get_old_ClassDeclaration_ReplayController());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayController": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReplayController():
    TypeOnly<current.ReplayController>;
declare function use_old_ClassDeclaration_ReplayController(
    use: TypeOnly<old.ReplayController>);
use_old_ClassDeclaration_ReplayController(
    get_current_ClassDeclaration_ReplayController());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReplayDocumentService():
    TypeOnly<old.ReplayDocumentService>;
declare function use_current_ClassDeclaration_ReplayDocumentService(
    use: TypeOnly<current.ReplayDocumentService>);
use_current_ClassDeclaration_ReplayDocumentService(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_ReplayDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReplayDocumentService():
    TypeOnly<current.ReplayDocumentService>;
declare function use_old_ClassDeclaration_ReplayDocumentService(
    use: TypeOnly<old.ReplayDocumentService>);
use_old_ClassDeclaration_ReplayDocumentService(
    get_current_ClassDeclaration_ReplayDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReplayDocumentServiceFactory():
    TypeOnly<old.ReplayDocumentServiceFactory>;
declare function use_current_ClassDeclaration_ReplayDocumentServiceFactory(
    use: TypeOnly<current.ReplayDocumentServiceFactory>);
use_current_ClassDeclaration_ReplayDocumentServiceFactory(
    get_old_ClassDeclaration_ReplayDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReplayDocumentServiceFactory():
    TypeOnly<current.ReplayDocumentServiceFactory>;
declare function use_old_ClassDeclaration_ReplayDocumentServiceFactory(
    use: TypeOnly<old.ReplayDocumentServiceFactory>);
use_old_ClassDeclaration_ReplayDocumentServiceFactory(
    get_current_ClassDeclaration_ReplayDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_SnapshotStorage": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_SnapshotStorage():
    TypeOnly<old.SnapshotStorage>;
declare function use_current_ClassDeclaration_SnapshotStorage(
    use: TypeOnly<current.SnapshotStorage>);
use_current_ClassDeclaration_SnapshotStorage(
    get_old_ClassDeclaration_SnapshotStorage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_SnapshotStorage": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_SnapshotStorage():
    TypeOnly<current.SnapshotStorage>;
declare function use_old_ClassDeclaration_SnapshotStorage(
    use: TypeOnly<old.SnapshotStorage>);
use_old_ClassDeclaration_SnapshotStorage(
    get_current_ClassDeclaration_SnapshotStorage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_StaticStorageDocumentService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_StaticStorageDocumentService():
    TypeOnly<old.StaticStorageDocumentService>;
declare function use_current_ClassDeclaration_StaticStorageDocumentService(
    use: TypeOnly<current.StaticStorageDocumentService>);
use_current_ClassDeclaration_StaticStorageDocumentService(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_StaticStorageDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_StaticStorageDocumentService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_StaticStorageDocumentService():
    TypeOnly<current.StaticStorageDocumentService>;
declare function use_old_ClassDeclaration_StaticStorageDocumentService(
    use: TypeOnly<old.StaticStorageDocumentService>);
use_old_ClassDeclaration_StaticStorageDocumentService(
    get_current_ClassDeclaration_StaticStorageDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_StaticStorageDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_StaticStorageDocumentServiceFactory():
    TypeOnly<old.StaticStorageDocumentServiceFactory>;
declare function use_current_ClassDeclaration_StaticStorageDocumentServiceFactory(
    use: TypeOnly<current.StaticStorageDocumentServiceFactory>);
use_current_ClassDeclaration_StaticStorageDocumentServiceFactory(
    get_old_ClassDeclaration_StaticStorageDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_StaticStorageDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_StaticStorageDocumentServiceFactory():
    TypeOnly<current.StaticStorageDocumentServiceFactory>;
declare function use_old_ClassDeclaration_StaticStorageDocumentServiceFactory(
    use: TypeOnly<old.StaticStorageDocumentServiceFactory>);
use_old_ClassDeclaration_StaticStorageDocumentServiceFactory(
    get_current_ClassDeclaration_StaticStorageDocumentServiceFactory());
