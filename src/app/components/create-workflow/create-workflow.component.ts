import {
  AfterContentInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input,
  OnChanges,
  OnDestroy,
  OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

// @ts-ignore
/*import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';*/
import BpmnModeler from 'bpmn-js/lib/Modeler';
import {ImportXMLResult} from 'bpmn-js/lib/BaseViewer';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import provControlsModule from '../../customized/palette'
import { BpmnPropertiesProviderModule, BpmnPropertiesPanelModule } from 'bpmn-js-properties-panel';
import provCustomPropertiesProvider from '../../customized/prov-custom-property-provider';
import provCustomTypePropertiesProvider from '../../customized/prov-custom-type-property-provider';

import Modeler from 'bpmn-js/lib/Modeler';

// @ts-ignore
import provModdle  from '../../customized/prov-moddle.json';

@Component({
  selector: 'tsg-mktplc-create-workflow',
  imports: [],
  templateUrl: './create-workflow.component.html',
  standalone: true,
  styleUrl: './create-workflow.component.scss'
})
export class CreateWorkflowComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {

  @ViewChild('bpmnModelerRef', { static: true }) private bpmnModelerRef: ElementRef;
  @ViewChild('properties', { static: true }) private properties: ElementRef;
  @Input() private url?: string;
  /*@Output() private importDone: EventEmitter<ImportDoneEvent> = new EventEmitter();*/
  private modeler: BpmnModeler;
  /*private bpmnJS: BpmnJS;*/
  private newDiagram = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" xmlns:prov="http://prov/ns" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">\n' +
    '  <bpmn2:process id="Process_1" isExecutable="false">\n' +
    '    <bpmn2:startEvent id="StartEvent_1"/>\n' +
    '  </bpmn2:process>\n' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n' +
    '        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>\n' +
    '      </bpmndi:BPMNShape>\n' +
    '    </bpmndi:BPMNPlane>\n' +
    '  </bpmndi:BPMNDiagram>\n' +
    '</bpmn2:definitions>';
  constructor(private http: HttpClient) {
    /*this.modeler = new BpmnModeler();*/
  }

  ngAfterContentInit(): void {

  }
  ngOnInit(): void {
    this.initBpmn();

    /*this.modeler.get('palette').registerProvider(new ProvPaletteProvider());*/

  }

  initBpmn() {
    this.modeler = new Modeler({
      container: this.bpmnModelerRef?.nativeElement,
      propertiesPanel: {
        parent: this.properties?.nativeElement
      },
      additionalModules: [
        provControlsModule,
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        provCustomPropertiesProvider,
        provCustomTypePropertiesProvider
      ],
      moddleExtensions: {
        prov: provModdle
      }
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    // re-import whenever the url changes
    console.log('Something got added');

  }
  ngOnDestroy(): void {

  }

  createNewDiagram() {
    this.modeler.attachTo(this.bpmnModelerRef!.nativeElement);
    /*this.http.get('./../../../assets/newDiagram.bpmn', {responseType: 'text'}).subscribe(data => {*/
      console.log('myData: ', this.newDiagram);
      this.importDiagram(this.newDiagram);
    /*});*/
  }

 saveNewDiagram() {
    this.modeler.attachTo(this.bpmnModelerRef!.nativeElement);
    /*this.http.get('./../../../assets/newDiagram.bpmn', {responseType: 'text'}).subscribe(data => {*/

   const  xml = this.modeler.saveXML({ format: true });
   console.log('myBPMNData: ', [xml]);

    /*});*/
  }

  private importDiagram(xml: any): Observable<ImportXMLResult> {
    return from(this.modeler.importXML(xml) as Promise<{warnings: Array<any>}>);
  }

}
